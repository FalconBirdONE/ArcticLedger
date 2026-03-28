import { useState } from "react";

// TODO: Replace these stubs with actual imported components
import BaseTable from "../components/table/baseTable";

function SalesTable({ data }) {
    const columns = [
        { key: "month", header: "Month" },
        { key: "location", header: "Location" },
        { key: "invoiceNo", header: "Invoice No" },
        { key: "invoiceDate", header: "Invoice Date" },
        { key: "customerName", header: "Customer Name" },
        { key: "vendorNo", header: "Vendor No" },
        { key: "quantity", header: "Quantity" },
        { key: "price", header: "Price" },
        { key: "cash", header: "Cash" },
        { key: "gpay", header: "Gpay" },
        { key: "cheque", header: "Cheque" },
        { key: "chequeDtd", header: "Cheque dtd" },
        { key: "chequeDetails", header: "Cheque Details" },
        { key: "credit", header: "Credit" },
        { key: "damage", header: "Damage" }
    ];

    return <BaseTable data={data} columns={columns} />;
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