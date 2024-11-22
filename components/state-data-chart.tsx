"use client";

import { Stat } from "@/lib/schemas";
import { statesList } from "@/lib/states-data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const generateStateData = (stats: Stat[]) => {
  const available_states = [
    ...new Set(
      stats.map((stat) => {
        const state_obj = statesList.find((state) => state.code === stat.state);
        return state_obj?.name;
      })
    ),
  ];
  return statesList
    .filter((state) => available_states.includes(state.name))
    .map((state) => {
      const stats_in_state = stats.filter((stat) => stat.state === state.code);

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

      return {
        name: state.code,
        interestRate: Number(avg_interest_rate.toFixed(2)),
        downPayment: Number(avg_down_payment_percentage.toFixed(2)),
        avgClosingCosts: Number(avg_closing_costs.toFixed(2)),
      };
    });
};

export function StateDataChart({ stats }: { stats: Stat[] }) {
  const data = generateStateData(stats);

  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                    <p className="font-medium mb-1">{label}</p>
                    {payload.map((entry) => (
                      <p
                        key={entry.name}
                        className="text-sm"
                        style={{ color: entry.color }}
                      >
                        {entry.name}:{" "}
                        {entry.dataKey === "avgClosingCosts"
                          ? `$${entry.value.toLocaleString()}`
                          : `${entry.value}%`}
                      </p>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Bar dataKey="interestRate" name="Interest Rate" fill="#3b82f6" />
          <Bar dataKey="downPayment" name="Down Payment" fill="#10b981" />
          <Bar
            dataKey="avgClosingCosts"
            name="Average Closing Costs"
            fill="#f59e0b"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
