// src/components/Dashboard.jsx
import SummaryCards from "./SummaryCards";
import Charts from "./Charts";
import TransactionTable from "./TransactionTable";
import RoleSwitcher from "./RoleSwitcher";
import Insights from "./Insights";
import { useState } from "react";

export default function Dashboard() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-gray-900 text-white p-6"
          : "min-h-screen bg-gray-100 p-6"
      }
    >
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Finance Dashboard</h1>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>

            <RoleSwitcher />
          </div>
        </div>

        {/* Cards */}
        <SummaryCards dark={dark} />

        {/* Charts + Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className={
              dark
                ? "bg-gray-800 text-white p-5 rounded-xl shadow-md"
                : "bg-white p-5 rounded-xl shadow-md"
            }
          >
            <Charts dark={dark} />
          </div>

          <div
            className={
              dark
                ? "bg-gray-800 text-white p-5 rounded-xl shadow-md flex items-center justify-center"
                : "bg-white p-5 rounded-xl shadow-md flex items-center justify-center"
            }
          >
            <Insights dark={dark} />
          </div>
        </div>

        {/* Table */}
        <TransactionTable dark={dark} />

      </div>
    </div>
  );
}