"use client";

import { chartData } from "@/constants/placeholder";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#F97316", "#FB923C", "#FDBA74", "#EA580C"];

export function VendorsPieChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="font-semibold mb-4">Top Performing Vendors</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Tooltip />
          <Pie
            data={chartData}
            dataKey="value"
            outerRadius={90}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
