import BaseTable from "./table/baseTable";

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

export default SalesTable;