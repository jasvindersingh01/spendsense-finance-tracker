import React from "react";
import { data } from "react-router-dom";
import { BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer, CartesianGrid } from "recharts";

const SpendingBarChart = ({ transaction }) => {
  const grouped = transaction
    .filter((tx) => tx.amount < 0)
    .reduce((acc, tx) => {

      const date = tx.date

      if (!acc[date]) {
        acc[date] = 0;
      }

      acc[date] += Math.abs(tx.amount);
      return acc;
    }, {})

  const chartData = Object.entries(grouped).map(([date, amount]) => ({
    date: new Date(date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }),
    amount
  }));


  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow mt-4 w-full lg:max-w-5xl mx-auto">

      <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 dark:text-white">
        Spending Over Time
      </h2>
      {chartData.length === 0 ? (
        <div className="flex justify-center items-center h-[300px]">
          <p className="text-center text-gray-500 dark:text-gray-300 text-base">
            No spending data yet. Add an expense to see the chart.
          </p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )
      }
    </div>
  );
};

export default SpendingBarChart;
