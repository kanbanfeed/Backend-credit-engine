import React from "react";

function TransactionsTable({ transactions }) {
  return (
    <div className="bg-white shadow rounded p-4 overflow-x-auto">
      <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
      <table className="min-w-full table-auto border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border-b text-left w-1/3">Email</th>
            <th className="p-3 border-b text-right w-1/6">Amount</th>
            <th className="p-3 border-b text-right w-1/6">Credits</th>
            <th className="p-3 border-b text-left w-1/6">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition">
              <td className="p-3 border-b text-left">{tx.email}</td>
              <td className="p-3 border-b text-right">{tx.amount}</td>
              <td className="p-3 border-b text-right">{tx.credits}</td>
              <td className="p-3 border-b text-left">{tx.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
