"use client";

import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const ScrollableCharts = () => {
  // Refs for each section
  const loanTermsRef = useRef<HTMLDivElement>(null);
  const paymentsRef = useRef<HTMLDivElement>(null);
  const costsRef = useRef<HTMLDivElement>(null);

  // Sample data - replace with real data
  const sampleData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-20 w-full rounded-lg p-4">
      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-8 sticky top-0 z-10 p-4 border-b">
        <Button onClick={() => scrollToSection(loanTermsRef)}>
          Loan Terms
        </Button>
        <Button onClick={() => scrollToSection(paymentsRef)}>Payments</Button>
        <Button onClick={() => scrollToSection(costsRef)}>Costs</Button>
      </div>

      {/* Charts Grid */}
      <div className="space-y-12">
        {/* Loan Terms Section */}
        <div ref={loanTermsRef}>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Loan Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Interest Rate Trends
              </h3>
              <LineChart width={500} height={300} data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Loan Amount Distribution
              </h3>
              <BarChart width={500} height={300} data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>

        {/* Payments Section */}
        <div ref={paymentsRef}>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Payments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Monthly Payment Breakdown
              </h3>
              <PieChart width={500} height={300}>
                <Pie
                  data={sampleData}
                  cx={250}
                  cy={150}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sampleData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Payment Timeline</h3>
              <LineChart width={500} height={300} data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
        </div>

        {/* Costs Section */}
        <div ref={costsRef}>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Costs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Closing Costs</h3>
              <BarChart width={500} height={300} data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">
                Total Cost Analysis
              </h3>
              <LineChart width={500} height={300} data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#ffc658" />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
