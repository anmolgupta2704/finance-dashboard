// src/components/SummaryCards.jsx
import { useStore } from "../store/useStore";

export default function SummaryCards({ dark }) {
  const { transactions } = useStore();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid md:grid-cols-3 gap-6">

      {/* Balance */}
      <div
        className={
          dark
            ? "bg-gray-800 text-white p-5 rounded-xl shadow-md"
            : "bg-white p-5 rounded-xl shadow-md"
        }
      >
        <p className={dark ? "text-gray-300" : "text-gray-500"}>
          Balance
        </p>
        <h2 className="text-xl font-bold">₹{balance}</h2>
      </div>

      {/* Income */}
      <div
        className={
          dark
            ? "bg-gray-800 text-white p-5 rounded-xl shadow-md"
            : "bg-white p-5 rounded-xl shadow-md"
        }
      >
        <p className={dark ? "text-gray-300" : "text-gray-500"}>
          Income
        </p>
        <h2 className="text-green-500 font-bold">₹{income}</h2>
      </div>

      {/* Expense */}
      <div
        className={
          dark
            ? "bg-gray-800 text-white p-5 rounded-xl shadow-md"
            : "bg-white p-5 rounded-xl shadow-md"
        }
      >
        <p className={dark ? "text-gray-300" : "text-gray-500"}>
          Expense
        </p>
        <h2 className="text-red-400 font-bold">₹{expense}</h2>
      </div>

    </div>
  );
}