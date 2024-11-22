import { z } from "zod";

export const loanEstimateSchema = z.object({
  loan_summary: z.object({
    property: z.object({
      address: z.string(),
    }),
    date_issued: z.string(),
    sale_price: z.number(),
    loan_term: z.object({
      type: z.enum(['years', 'months']),
      value: z.number(),
    }),
    purpose: z.string(),
    product: z.string(),
    loan_type: z.enum(['Conventional', 'FHA', 'VA', 'USDA', 'Jumbo', 'ARM', 'Other']),
  }),
  loan_terms: z.object({
    loan_amount: z.object({
      value: z.number(),
      can_increase_after_closing: z.boolean(),
    }),
    interest_rate: z.object({
      value: z.number(),
      can_increase_after_closing: z.boolean(),
    }),
    monthly_principal_and_interest: z.object({
      value: z.number(),
      can_increase_after_closing: z.boolean(),
    }),
  }),
  projected_payments: z.object({
    principal_and_interest: z.array(z.object({
      years_range: z.string(),
      amount: z.number(),
    })),
    mortgage_insurance: z.array(z.object({
      years_range: z.string(),
      amount: z.number(),
    })),
    estimated_escrow: z.array(z.object({
      years_range: z.string(),
      amount: z.number(),
    })),
    estimated_total_monthly_payment: z.array(z.object({
      years_range: z.string(),
      amount: z.number(),
    })),
    estimated_taxes_insurance_assessments: z.object({
      amount: z.number(),
      frequency: z.enum(['monthly', 'yearly']),
    }),
    estimate_includes: z.object({
      property_taxes: z.object({
        includes: z.boolean(),
        in_escrow: z.boolean(),
      }),
      homeowners_insurance: z.object({
        includes: z.boolean(),
        details: z.string(),
        in_escrow: z.boolean(),
      }),
      other: z.object({
        includes: z.boolean(),
        in_escrow: z.boolean(),
      }),
    }),
  }),
  costs_at_closing: z.object({
      origination_charges: z.object({
        origination_fee: z.number(),
        points: z.object({
          percentage_of_loan_amount: z.number(),
          amount: z.number(),
        }),
      }),
    }),
    calculating_cash_to_close: z.object({
      total_closing_costs: z.number(),
      closing_costs_financed: z.number(),
      down_payment_funds_from_borrower: z.number(),
      deposit: z.number(),
      funds_for_borrower: z.number(),
      seller_credits: z.number(),
      estimated_cash_to_close: z.number(),
    }),
    comparisons: z.object({
      apr: z.number(),
      total_interest_percentage: z.number(),
    })
});

export type LoanEstimate = z.infer<typeof loanEstimateSchema>;


export type Stat = {
  state: string;
  zipcode: number;
  date_issued: {
    $date: string;
  };
  interest_rate: number;
  apr: number;
  sale_price: {
    $numberLong: string;
  };
  downpayment_percentage: number;
  loan_term_years: {
    $numberLong: string;
  };
  loan_purpose: string;
  loan_type: string;
  total_closing_costs: {
    $numberLong: string;
  };
  closing_cost_percentage: number;
  points_percentage_of_loan_amount: number;
  points_amount: number;
};
