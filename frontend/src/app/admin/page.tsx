import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#101115] text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-[#4ade80]">Admin Dashboard Overview</h1>
      <p className="text-gray-400 mb-8">System health, User activity, and Risk controls.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#272930] p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-4xl text-[#4ade80]">1,254</p>
        </div>
        <div className="bg-[#272930] p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Active Deposits</h2>
          <p className="text-4xl text-[#fcd34d]">$12,450.00</p>
        </div>
        <div className="bg-[#272930] p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Flagged Accounts</h2>
          <p className="text-4xl text-red-500">3</p>
        </div>
      </div>
      
      <div className="mt-12 bg-[#272930] p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Risk Controls & Responsible Gaming</h2>
        <ul className="space-y-4 text-gray-300">
          <li className="flex justify-between items-center bg-[#1e2025] p-4 rounded">
            <span>Global Deposit Limit</span>
            <span className="text-[#4ade80] font-mono">$5,000 / day</span>
          </li>
          <li className="flex justify-between items-center bg-[#1e2025] p-4 rounded">
            <span>Self-Excluded Users</span>
            <span className="text-yellow-400 font-mono">14</span>
          </li>
          <li className="flex justify-between items-center bg-[#1e2025] p-4 rounded">
            <span>Server-side RNG</span>
            <span className="text-green-500 font-bold">ACTIVE</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
