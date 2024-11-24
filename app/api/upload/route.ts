import { prisma } from "@/lib/prisma";
import { loanEstimateSchema } from "@/lib/schemas";
import { anthropic } from "@ai-sdk/anthropic";
import { generateObject } from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 120;

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("pdf") as File;

  const result = await generateObject({
    model: anthropic("claude-3-5-sonnet-20240620"),
    messages: [
      {
        role: "system",
        content:
          "You are a mortgage expert.",
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Take this pdf of mortgage data and structure it into an object.",
          },
          {
            type: "file",
            data: await file.arrayBuffer(),
            mimeType: "application/pdf",
          },
        ],
      },
    ],
    output: "object",
    schema: loanEstimateSchema,
  });


  const pdf_data = result?.object;


  const geo_url = `https://api.geocod.io/v1.7/geocode?q=${encodeURIComponent(pdf_data?.loan_summary.property.address)}&fields=census&api_key=${process.env.GEOCOD_IO_API_KEY}`
  
  const geo_response = await fetch(geo_url);
  const geo_data = await geo_response.json();
  const geo_result = geo_data?.results?.[0];
  const geo_state = geo_result?.address_components?.state;
  const geo_zip = parseInt(geo_result?.address_components?.zip);

  const downpayment_percentage = (pdf_data?.calculating_cash_to_close.down_payment_funds_from_borrower / pdf_data?.loan_summary.sale_price) * 100;
  const closing_cost_percentage = (pdf_data?.calculating_cash_to_close.total_closing_costs / pdf_data?.loan_summary.sale_price) * 100;
  const lender_credits_percentage = (pdf_data?.calculating_cash_to_close.lender_credits / pdf_data?.loan_summary.sale_price) * 100;
  const seller_credits_percentage = (pdf_data?.calculating_cash_to_close.seller_credits / pdf_data?.loan_summary.sale_price) * 100;
  
  await prisma.stats_mortgage_doc_upload.create({
    data: {
      id: crypto.randomUUID(),
      state: geo_state,
      zipcode: geo_zip,
      date_issued: new Date(pdf_data?.loan_summary.date_issued),
      interest_rate: pdf_data?.loan_terms.interest_rate.value,
      apr: pdf_data?.comparisons?.apr,
      points_percentage_of_loan_amount: pdf_data?.costs_at_closing.origination_charges.points.percentage_of_loan_amount,
      points_amount: pdf_data?.costs_at_closing.origination_charges.points.amount,  
      origination_fee: pdf_data?.costs_at_closing.origination_charges.origination_fee,
      sale_price: pdf_data?.loan_summary.sale_price,
      downpayment_percentage,
      loan_term_years: pdf_data?.loan_summary.loan_term.value,
      loan_purpose: pdf_data?.loan_summary.purpose,
      loan_type: pdf_data?.loan_summary.product,
      total_closing_costs: pdf_data?.calculating_cash_to_close.total_closing_costs,
      lender_credits_percentage,
      seller_credits_percentage,  
      closing_cost_percentage: closing_cost_percentage
    }
  })

  return NextResponse.json({success: true});
}