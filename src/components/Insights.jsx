
import { useStore } from "../store/useStore";

export default function Insights() {
  const { transactions } = useStore();

  const categoryCount = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryCount[t.category] =
        (categoryCount[t.category] || 0) + t.amount;
    }
  });

  const highest =
    Object.keys(categoryCount).length > 0
      ? Object.keys(categoryCount).reduce((a, b) =>
          categoryCount[a] > categoryCount[b] ? a : b
        )
      : "No Data";

  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-2">Insights</h2>
      <p className="text-gray-600">Highest Spending</p>
      <p className="text-xl font-bold text-blue-600">{highest}</p>
    </div>
  );
}