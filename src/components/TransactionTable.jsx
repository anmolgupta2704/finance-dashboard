import { useStore } from "../store/useStore";

export default function TransactionTable({ dark }) {
  const { transactions, role, addTransaction } = useStore();

  const handleAdd = () => {
    const amount = prompt("Enter amount:");
    const category = prompt("Enter category (Food/Travel/etc):");
    const type = prompt("Type (income/expense):");

    if (!amount || !category || !type) {
      alert("All fields required!");
      return;
    }

    const newTx = {
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      category,
      type,
    };

    addTransaction(newTx);
  };

  return (
    <div
      className={
        dark
          ? "bg-gray-800 text-white p-5 rounded-xl shadow-md"
          : "bg-white p-5 rounded-xl shadow-md"
      }
    >
      <h2 className="text-lg font-semibold mb-4">Transactions</h2>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr
            className={
              dark
                ? "border-b text-gray-300"
                : "border-b text-gray-600"
            }
          >
            <th className="py-2">Date</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Category</th>
            <th className="py-2">Type</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr
              key={t.id}
              className={
                dark
                  ? "border-b hover:bg-gray-700"
                  : "border-b hover:bg-gray-50"
              }
            >
              <td className={dark ? "py-2 text-gray-200" : "py-2"}>
                {t.date}
              </td>
              <td className="py-2">₹{t.amount}</td>
              <td className="py-2">{t.category}</td>
              <td
                className={
                  t.type === "income"
                    ? "text-green-500"
                    : "text-red-400"
                }
              >
                {t.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {role === "admin" && (
        <button
          onClick={handleAdd}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add Transaction
        </button>
      )}
    </div>
  );
}