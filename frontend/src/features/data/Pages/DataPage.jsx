import { useState } from "react";

export default function DataPage() {
    const [activeTab, setActiveTab] = useState("sales");

    return (
        <div>
            {/* Tabs */}
            <div className="tabs">
                <button onClick={() => setActiveTab("sales")}>Sales</button>
                <button onClick={() => setActiveTab("users")}>Users</button>
                <button onClick={() => setActiveTab("orders")}>Orders</button>
            </div>

            {/* Table */}
            <div className="table-container">
                {activeTab === "sales" && <SalesTable />}
                {activeTab === "users" && <UsersTable />}
                {activeTab === "orders" && <OrdersTable />}
            </div>
        </div>
    );
}