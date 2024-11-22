"use client";

import { FilterBar } from "@/components/filter-bar";
import { MetricCards } from "@/components/metric-cards";
import { Card } from "@/components/ui/card";
import { USAMap } from "@/components/usa-map";
import { Stat } from "@/lib/schemas";
import { statesList } from "@/lib/states-data";
import { useState } from "react";

export type LoanType = "Conventional" | "FHA" | "VA" | "USDA";
export type LoanTerm = "15" | "20" | "30";

export function MortgageDataDashboard({ stats }: { stats: Stat[] }) {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [loanType, setLoanType] = useState<LoanType>("Conventional");
  const [loanTerm, setLoanTerm] = useState<LoanTerm>("30");
  const available_states = statesList.reduce<{ name: string; code: string }[]>(
    (acc, state) => {
      if (stats.map((stat) => stat.state).includes(state.code)) {
        acc.push(state);
      }
      return acc;
    },
    []
  );

  return (
    <div className="space-y-6 mt-12 w-full">
      <Card className="p-6 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="aspect-[16/9] w-full">
                <USAMap
                  stats={stats}
                  onSelectState={setSelectedState}
                  selectedState={selectedState}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4">
            <FilterBar
              available_states={available_states}
              stats={stats}
              selectedState={selectedState}
              onStateChange={(state) => setSelectedState(state.code)}
              loanType={loanType}
              onLoanTypeChange={setLoanType}
              loanTerm={loanTerm}
              onLoanTermChange={setLoanTerm}
            />
            <MetricCards
              stats={stats}
              state={selectedState}
              loanType={loanType}
              loanTerm={loanTerm}
            />
          </div>
        </div>
      </Card>

      {/* <Card className="p-6 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          National Closing Costs Comparison
        </h3>
        <StateDataChart stats={stats} />
      </Card> */}
    </div>
  );
}
