import React from 'react';
import { BarChart, Wallet, PieChart, CircleDollarSign, Pencil } from 'lucide-react';
import Card from '../components/Card';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';
import { useState, useEffect } from 'react';
import SpendingBarChart from '../components/SpendingBarChart';
import CategoryPieChart from '../components/CategoryPieChart';

const Dashboard = () => {

    const [transactions, setTransactions] = useState(() => {
        const stored = localStorage.getItem("transactions");
        if (stored) return JSON.parse(stored);
        return [
            { id: 1, title: "Salary", amount: 5000, date: "2025-07-25" },
            { id: 2, title: "Food", amount: -800, date: "2025-07-27" },
        ]
    });

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions])

    const [budget, setBudget] = useState(() => {
        return parseFloat(localStorage.getItem("budget")) || 8000;
    });

    const [isEditing, setIsEditing] = useState(false);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudget = () => {
        setBudget(newBudget);
        setIsEditing(false);
        localStorage.setItem("budget", newBudget);
    };

    const data = {
        totalBalance: transactions.reduce((acc, t) => acc + t.amount, 0),
        monthlySpending: transactions.filter(t => t.amount < 0)
            .reduce((acc, t) => acc + Math.abs(t.amount), 0),
        budget: budget,
    };

    const handleDelete = (id) => {
        const update = transactions.filter((tx) => tx.id !== id);
        setTransactions(update);
        localStorage.setItem("transactions", JSON.stringify());
    };

    data.remainingBudget = data.budget - data.monthlySpending;

    const summeryCard = [
        {
            title: "Total Balance",
            amount: `$${data.totalBalance}`,
            icon: <Wallet className="text-blue-500" />
        },
        {
            title: "Monthly Spending",
            amount: `$${data.monthlySpending}`,
            icon: < BarChart className='text-orange-500' />
        },
        {
            title: "Budget",
            amount: `$${data.budget}`,
            icon: <CircleDollarSign className='text-green-500' />
        },
        {
            title: "Remaining Budget",
            amount: `$${data.remainingBudget}`,
            icon: < PieChart className='text-purple-500' />
        }
    ];

    return (
 <div className="px-4 py-6 space-y-6">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {summeryCard.map((card, index) => (
      <div key={index} className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex items-center justify-between">
        <div>
          <h3 className="text-sm">{card.title}</h3>
          {card.title === "Budget" ? (
            <div className="flex items-center gap-2">
              {isEditing ? (
                <>
                  <input
                    type="number"
                    value={newBudget}
                    onChange={(e) => setNewBudget(Number(e.target.value))}
                    className="w-20 border px-1 py-0.5 rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <button onClick={handleBudget} className="text-blue-500 text-sm">Save</button>
                </>
              ) : (
                <>
                  <p className="text-xl font-semibold">${budget}</p>
                  <Pencil
                    className="w-4 h-4 cursor-pointer text-gray-500"
                    onClick={() => setIsEditing(true)}
                  />
                </>
              )}
            </div>
          ) : (
            <p className="text-xl font-semibold">{card.amount}</p>
          )}
        </div>
        <div className="text-3xl">{card.icon}</div>
      </div>
    ))}
  </div>

  <div className="flex flex-col lg:flex-row gap-4">
    <div className="w-full lg:w-1/2">
      <SpendingBarChart transaction={transactions} />
    </div>
    <div className="w-full lg:w-1/2">
      <CategoryPieChart transactions={transactions} />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row gap-4">
    <div className="w-full lg:w-1/2">
      <AddTransaction onAdd={(newTx) => setTransactions([...transactions, newTx])} />
    </div>
    <div className="w-full lg:w-1/2">
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </div>
  </div>
</div>


    )
}

export default Dashboard
