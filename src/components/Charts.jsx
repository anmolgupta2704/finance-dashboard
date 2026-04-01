// src/components/Charts.jsx
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis } from "recharts";
import { useStore } from "../store/useStore";

export default function Charts() {
  const { transactions } = useStore();

  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      if (!acc[t.category]) acc[t.category] = { name: t.category, value: 0 };
      acc[t.category].value += t.amount;
      return acc;
    }, {})
  );

  return (
    <div className="bg-white p-5 rounded-xl shadow">
  
    <div className="flex gap-6">
      <PieChart width={200} height={200}>
        <Pie data={categoryData} dataKey="value" />
      </PieChart>

      <LineChart width={300} height={200} data={transactions}>
        <XAxis dataKey="date" />
        <YAxis />
        <Line dataKey="amount" />
      </LineChart>
    </div>
    
</div>
  );
}