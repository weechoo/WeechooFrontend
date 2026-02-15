"use client";

import { chartData } from "@/constants/placeholder";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#FDCD8E", "#54433A", "#F97316", "#8D5C3F"];

const wrapText = (name: string) => {
  if (name.includes(" ")) {
    const words = name.split(" ");
    if (words.length > 2) {
      const firstLine = words.slice(0, 2).join(" ");
      const secondLine = words.slice(2).join(" ");
      return [firstLine, secondLine];
    } else if (words.length === 2) {
      return [words[0], words[1]];
    }
  }

  return [name];
};

export function VendorsPieChart() {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm h-full">
      <h3 className="font-semibold mb-1">Top Performing Vendors</h3>

      <div className="text-xs text-neutral-500 mb-4">
        Based on number of Orders
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Tooltip />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            labelLine={false}
            paddingAngle={0}
            cornerRadius={5}
            label={({
              name,
              percent = 0,
              cx = 0,
              cy = 0,
              midAngle = 0,
              outerRadius = 0,
            }) => {
              // calculate position for label
              const radius = outerRadius + 30;
              const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
              const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

              const textAnchor = x > cx ? "start" : "end";
              const percentage = `${(percent * 100).toFixed(0)}%`;
              const nameLines = wrapText(name as string);

              return (
                <g>
                  {/* percentage on top */}
                  <text
                    x={x}
                    y={y - (nameLines.length > 1 ? 12 : 8)}
                    fill="#374151"
                    textAnchor={textAnchor}
                    dominantBaseline="text-after-edge"
                    className="text-[10px] font-bold"
                  >
                    {percentage}
                  </text>

                  {/* name lines below */}
                  {nameLines.map((line, index) => (
                    <text
                      key={index}
                      x={x}
                      y={y + index * 16 - (nameLines.length > 1 ? 4 : 0)}
                      fill="#374151"
                      textAnchor={textAnchor}
                      dominantBaseline="text-before-edge"
                      className="text-[10px] font-medium"
                    >
                      {line}
                    </text>
                  ))}
                </g>
              );
            }}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
