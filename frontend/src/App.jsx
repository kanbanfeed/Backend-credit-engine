import React from "react";
import './index.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import TransactionsTable from "./components/TransactionsTable";

function App() {
  // Updated stats with 10 users
  const stats = {
    totalTransactions: 10,
    totalCredits: 750,
    lastUsers: [
      "alice@example.com",
      "bob@example.com",
      "charlie@example.com",
      "david@example.com",
      "emma@example.com",
      "frank@example.com",
      "grace@example.com",
      "henry@example.com",
      "isabella@example.com",
      "jack@example.com",
    ],
  };

  // 10 dummy transactions
  const transactions = [
    { email: "alice@example.com", amount: 50, credits: 50, timestamp: "2025-10-20 10:00" },
    { email: "bob@example.com", amount: 75, credits: 75, timestamp: "2025-10-20 11:00" },
    { email: "charlie@example.com", amount: 30, credits: 30, timestamp: "2025-10-20 12:00" },
    { email: "david@example.com", amount: 120, credits: 120, timestamp: "2025-10-21 09:45" },
    { email: "emma@example.com", amount: 90, credits: 90, timestamp: "2025-10-21 10:20" },
    { email: "frank@example.com", amount: 60, credits: 60, timestamp: "2025-10-21 11:10" },
    { email: "grace@example.com", amount: 40, credits: 40, timestamp: "2025-10-21 12:00" },
    { email: "henry@example.com", amount: 150, credits: 150, timestamp: "2025-10-22 08:30" },
    { email: "isabella@example.com", amount: 110, credits: 110, timestamp: "2025-10-22 09:15" },
    { email: "jack@example.com", amount: 70, credits: 70, timestamp: "2025-10-22 10:00" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <StatsCards stats={stats} />
        <TransactionsTable transactions={transactions} />
      </div>
    </div>
  );
}

export default App;

