import React from "react";

function SettingTransactionHistory() {
  const transactions = [
    {
      date: "Mar 15, 2025",
      transaction: "Coin Purchase",
      amount: "+1000 coins",
      status: "Completed",
    },
    {
      date: "Mar 12, 2025",
      transaction: "Usage",
      amount: "-250 coins",
      status: "Processed",
    },
  ];

  return (
    <section className="bg-white rounded-lg border border shadow-sm mt-6">
      <header className="p-6 text-lg font-semibold text-black border border">
        Transaction History
      </header>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500">
                Date
              </th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500">
                Transaction
              </th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500">
                Amount
              </th>
              <th className="px-6 py-3 text-xs font-medium text-left text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className={index === 0 ? "border border" : ""}>
                <td className="px-6 py-5 text-sm text-gray-500">
                  {transaction.date}
                </td>
                <td className="px-6 py-5 text-sm text-gray-900">
                  {transaction.transaction}
                </td>
                <td className="px-6 py-5 text-sm text-gray-900">
                  {transaction.amount}
                </td>
                <td className="px-6 py-5">
                  <StatusBadge status={transaction.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StatusBadge({ status }) {
  const getStatusStyles = () => {
    switch (status) {
      case "Completed":
        return "text-emerald-800 bg-emerald-100";
      case "Processed":
        return "text-blue-800 bg-blue-100";
      case "Pending":
        return "text-yellow-800 bg-yellow-100";
      default:
        return "text-gray-800 bg-gray-100";
    }
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold ${getStatusStyles()} rounded-full`}
    >
      {status}
    </span>
  );
}

export default SettingTransactionHistory;
