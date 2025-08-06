import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = [
  "#3b82f6", // Blue
  "#f97316", // Orange
  "#10b981", // Green
  "#ef4444", // Red
  "#8b5cf6", // Violet
  "#ec4899", // Pink
  "#facc15", // Yellow
  "#14b8a6", // Teal
];

const CategoryPieChart = ({ transactions }) => {

  const expenses = transactions.filter((tx) => tx.amount < 0);

  const grouped = expenses.reduce((acc, tx) => {
    const category = tx.category || "Other";
    if (!acc[category]) acc[category] = 0;
    acc[category] += Math.abs(tx.amount);
    return acc;
  }, {});


  const chartData = Object.entries(grouped).map(([category, amount]) => ({
    category,
    amount,
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow mt-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
        Spending by Category
      </h2> {chartData.length === 0 ? (
        <div className="flex justify-center items-center h-[300px]">
          <p className="text-center text-gray-500 dark:text-gray-300 text-base">
            No spending data yet. Add an expense to see the chart.
          </p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label={({ category, amount }) => `${category}: ₹${amount}`}
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}, "Category"`]}
              contentStyle={{
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
              labelStyle={{ color: "#6b7280" }}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                fontSize: "12px",
                marginTop: "10px"
              }} />
          </PieChart >
        </ResponsiveContainer >
      )}
    </div >
  );
};

export default CategoryPieChart;
