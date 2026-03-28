import { useState } from "react";
import "./DataPage.css";

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
        {
            month: "March",
            location: "Mumbai",
            invoiceNo: "INV001",
            invoiceDate: "28-03-2026",
            customerName: "ABC Traders",
            vendorNo: "V001",
            quantity: 10,
            price: 5000,
            cash: 2000,
            gpay: 1000,
            cheque: 1000,
            chequeDtd: "30-03-2026",
            chequeDetails: "HDFC 1234",
            credit: 1000,
            damage: 0
        }
    ];
    return (
        <div>

            {/* Tabs */}
            <div className="tabs">
                <button
                    className={activeTab === "sales" ? "active" : ""}
                    onClick={() => setActiveTab("sales")}
                >
                    Sales
                </button>

                <button
                    className={activeTab === "users" ? "active" : ""}
                    onClick={() => setActiveTab("users")}
                >
                    Users
                </button>

                <button
                    className={activeTab === "orders" ? "active" : ""}
                    onClick={() => setActiveTab("orders")}
                >
                    Orders
                </button>
            </div>

            {/* Table */}
            <div className="table-container fade-slide">
                {activeTab === "sales" && <SalesTable data={mockData} />}
                {activeTab === "users" && <UsersTable />}
                {activeTab === "orders" && <OrdersTable />}
            </div>
        </div>
    );
}