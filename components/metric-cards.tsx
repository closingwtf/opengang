"use client";

import { Card } from "@/components/ui/card";
import { Stat } from "@/lib/schemas";
import { statesList } from "@/lib/states-data";
import { PiggyBankIcon, ReceiptIcon, TrendingUpIcon } from "lucide-react";
import { LoanTerm, LoanType } from "./mortgage-data-dashboard";

interface MetricCardsProps {
  stats: Stat[];
  state: string;
  loanType: LoanType;
  loanTerm: LoanTerm;
}

export function MetricCards({
  stats,
  state,
  loanType,
  loanTerm,
}: MetricCardsProps) {
  const state_obj = statesList.find((s) => s.name === state);

  const stats_in_state = stats.filter((stat) => stat.state === state_obj?.code);
  console.log({ stats_in_state });

  const avg_interest_rate =
    stats_in_state
      .map((stat) => stat.interest_rate)
      .reduce((acc, curr) => acc + curr, 0) / stats_in_state.length;

  const avg_down_payment_percentage =
    stats_in_state
      .map((stat) => stat.downpayment_percentage)
      .reduce((acc, curr) => acc + curr, 0) / stats_in_state.length;

  const avg_closing_costs =
    stats_in_state
      .map((stat) => Number(stat.total_closing_costs))
      .reduce((acc, curr) => acc + curr, 0) / stats_in_state.length;

  console.log({ avg_interest_rate });
  // const getMetrics = () => ({
  //   interestRate: (6 + Math.random() * 2).toFixed(2),
  //   downPayment: (15 + Math.random() * 10).toFixed(2),
  //   closingCosts: (2 + Math.random() * 3).toFixed(2),
  // });

  // const metrics = getMetrics();

  return (
    <div className="grid md:grid-cols-1 gap-4">
      <MetricCard
        title="Average Interest Rate"
        value={`${avg_interest_rate.toFixed(2)}%`}
        icon={<TrendingUpIcon className="w-5 h-5" />}
        color="blue"
      />
      <MetricCard
        title="Avg Down Payment Percentage"
        value={`${avg_down_payment_percentage.toFixed(2)}%`}
        icon={<PiggyBankIcon className="w-5 h-5" />}
        color="green"
      />
      <MetricCard
        title="Avg Closing Costs"
        value={`$${avg_closing_costs.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}
        icon={<ReceiptIcon className="w-5 h-5" />}
        color="amber"
      />
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "amber";
}

function MetricCard({ title, value, icon, color }: MetricCardProps) {
  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    amber: "text-amber-600 dark:text-amber-400",
  };

  return (
    <Card className="p-4">
      <div className="flex items-center gap-3">
        <div className={colorClasses[color]}>{icon}</div>
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
      </div>
    </Card>
  );
}
