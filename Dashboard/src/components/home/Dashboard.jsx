import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000, orders: 240 },
  { name: "Feb", revenue: 3000, orders: 139 },
  { name: "Mar", revenue: 5000, orders: 380 },
  { name: "Apr", revenue: 4000, orders: 200 },
  { name: "May", revenue: 6000, orders: 490 },
  { name: "Jun", revenue: 7000, orders: 300 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#064e3b]/90  text-white p-6">

      {/* Navbar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/10 px-4 py-2 rounded-xl outline-none"
          />
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <Card title="Revenue" value="$12,540" />
        <Card title="Orders" value="320" />
        <Card title="Users" value="1,200" />
        <Card title="Growth" value="+12%" />
      </div>

      {/* TWO Charts */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">

        {/* Line Chart */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="mb-4">Revenue Trend</h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl">
          <h2 className="mb-4">Orders Overview</h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <Tooltip />

                <Bar dataKey="orders" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl">
        <h2 className="text-lg mb-4">Recent Orders</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="pb-2">Name</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-800">
              <td className="py-3">John</td>
              <td className="text-green-400">Paid</td>
              <td>$120</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="py-3">Sarah</td>
              <td className="text-yellow-400">Pending</td>
              <td>$80</td>
            </tr>
            <tr>
              <td className="py-3">Mike</td>
              <td className="text-red-400">Failed</td>
              <td>$50</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

/* Card */
function Card({ title, value }) {
  return (
    <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl hover:scale-105 transition">
      <h4 className="text-gray-400 text-sm">{title}</h4>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}