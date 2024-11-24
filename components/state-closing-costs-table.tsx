"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Stat } from "@/lib/schemas";
import { statesList } from "@/lib/states-data";
import React from "react";
import { LoanTerm, LoanType } from "./mortgage-data-dashboard";

interface StateClosingCostsTableProps {
  stats: Stat[];
  state: string | null;
  loanType: LoanType;
  loanTerm: LoanTerm;
}

export function StateClosingCostsTable({
  stats,
  state,
}: StateClosingCostsTableProps) {
  const stateCode = statesList.find((s) => s.name === state)?.code;

  const filteredStats = stats.filter((stat) => stat.state === stateCode);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Date Issued (Month/Year)</TableHead>
          <TableHead className="text-left">Interest Rate</TableHead>
          <TableHead className="text-right">
            Closing Cost Percentage of Loan Amount
          </TableHead>
          <TableHead className="text-right">Points Cost</TableHead>
          <TableHead className="text-right">
            Points Percentage of Loan Amount
          </TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredStats.map((stat, index) => {
          console.log("stat.date_issued", stat.date_issued);
          const date_issued = new Date(stat.date_issued).toLocaleString(
            "en-US",
            { month: "numeric", year: "numeric" }
          );
          const interest_rate = Number(stat.interest_rate);
          const origination_fee = Number(stat.origination_fee);
          const points_amount = Number(stat.points_amount);
          const closing_cost_percentage = Number(stat.closing_cost_percentage);

          return (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell className="text-left">{date_issued}</TableCell>
                <TableCell className="text-left">
                  {interest_rate.toFixed(2)}%
                </TableCell>

                <TableCell className="text-right">
                  {closing_cost_percentage.toFixed(2)}%
                </TableCell>
                <TableCell className="text-right">
                  {points_amount === 0
                    ? "n/a"
                    : `$${points_amount.toLocaleString()}`}
                </TableCell>
                <TableCell className="text-right">
                  {stat.points_percentage_of_loan_amount === 0
                    ? "n/a"
                    : `${stat.points_percentage_of_loan_amount.toFixed(2)}%`}
                </TableCell>
              </TableRow>
            </React.Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
}
