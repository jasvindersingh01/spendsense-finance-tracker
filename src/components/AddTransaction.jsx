import React from 'react'
import { useState } from 'react';

const AddTransaction = ({ onAdd }) => {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    let finalAmount = parseFloat(amount);

    if (type === "expense") {
      finalAmount = -Math.abs(finalAmount);
      
    } else {
      finalAmount = Math.abs(finalAmount);
    }

    const finalCategory = type === "income" ? "Income" : category;

    const newTx = {
      id: Date.now(),
      title,
      amount: finalAmount,
      date,
      category: finalCategory,
    };
    

    onAdd(newTx);
    setTitle("")
    setAmount("")
    setDate("");
    setType("expense")
    setCategory("Food")
  }

  return (
    <form
  onSubmit={handleSubmit}
  className="space-y-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 sm:p-8 rounded-xl shadow w-full max-w-3xl"
>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Add Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {type === "expense" ? (
        <>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Food" className="bg-white dark:bg-gray-700">Food</option>
            <option value="Travel" className="bg-white dark:bg-gray-700">Travel</option>
            <option value="Rent" className="bg-white dark:bg-gray-700">Rent</option>
            <option value="Health" className="bg-white dark:bg-gray-700">Health</option>
            <option value="Shopping" className="bg-white dark:bg-gray-700">Shopping</option>
            <option value="Entertainment" className="bg-white dark:bg-gray-700">Entertainment</option>
            <option value="Education" className="bg-white dark:bg-gray-700">Education</option>
            <option value="Utilities" className="bg-white dark:bg-gray-700">Utilities</option>
          </select>
        </>
      ) : (
        <>
          <select disabled>
            <option>Income</option>
          </select>
        </>
      )

      }

      <input
        type="number"
        placeholder="Amount (e.g., 500 or 1000)"
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="income" className="bg-white dark:bg-gray-700">Income</option>
        <option value="expense" className="bg-white dark:bg-gray-700">Expense</option>
      </select>

      <button
        type="submit"
        className="mt-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </button>
    </form>
  )
}

export default AddTransaction;