import React from 'react';
import { Trash2 } from 'lucide-react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow p-5 w-full">
  <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 dark:border-gray-700 pb-1">
    Transaction List
  </h2>

  <div className="hidden md:grid grid-cols-5 text-sm font-semibold border-b border-gray-400 dark:border-gray-600 pb-2 text-gray-700 dark:text-gray-300">
    <span>Date</span>
    <span>Title</span>
    <span>Category</span>
    <span>Amount</span>
    <span className="text-right">Action</span>
  </div>

  <div className="mt-2 max-h-[300px] overflow-y-auto">
    <ul className="space-y-2">
      {transactions.slice().reverse().map((tx) => (
        <li
          key={tx.id}
          className="grid md:grid-cols-5 grid-cols-1 gap-y-1 md:gap-4 py-2 px-2 border-b dark:border-gray-700"
        >
          <div className="md:hidden text-xs text-gray-400">Date</div>
          <span className="text-sm">{tx.date}</span>

          <div className="md:hidden text-xs text-gray-400">Title</div>
          <span className="text-sm truncate">{tx.title}</span>

          <div className="md:hidden text-xs text-gray-400">Category</div>
          <span className="text-sm truncate">{tx.category}</span>

          <div className="md:hidden text-xs text-gray-400">Amount</div>
          <span
            className={`font-semibold ${
              tx.amount < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {tx.amount < 0 ? `-₹${Math.abs(tx.amount)}` : `+₹${tx.amount}`}
          </span>

          <div className="md:hidden text-xs text-gray-400">Action</div>
          <div className="flex justify-start md:justify-end">
            <button
              onClick={() => onDelete(tx.id)}
              title="Delete"
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

  );
};

export default TransactionList;
