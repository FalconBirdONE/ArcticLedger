import { useState } from "react";

// TODO: Replace these stubs with actual imported components
function SalesTable({ data }) {
    return (
        <table>
            <thead><tr><th>ID</th><th>Name</th><th>Amount</th></tr></thead>
            <tbody>
                {data.map(row => (
                    <tr key={row.id}><td>{row.id}</td><td>{row.name}</td><td>{row.amount}</td></tr>
                ))}
            </tbody>
        </table>
    );
}

function UsersTable() {
    return <p>Users table coming soon.</p>;
}

function OrdersTable() {
    return <p>Orders table coming soon.</p>;
}

export default function DataPage() {
    const [activeTab, setActiveTab] = useState("sales");
    const mockData = [
        { id: 1, name: "Alice", amount: 500 },
        { id: 2, name: "Bob", amount: 300 }
    ];

    return (
        <div>
            <h1>DATA PAGE LOADED</h1>
            {/* Tabs */}
            <div className="tabs">
                <button onClick={() => setActiveTab("sales")}>Sales</button>
                <button onClick={() => setActiveTab("users")}>Users</button>
                <button onClick={() => setActiveTab("orders")}>Orders</button>
            </div>

            {/* Table */}
            <div className="table-container">
                {activeTab === "sales" && <SalesTable data={mockData} />}
                {activeTab === "users" && <UsersTable />}
                {activeTab === "orders" && <OrdersTable />}
            </div>
        </div>
    );
}