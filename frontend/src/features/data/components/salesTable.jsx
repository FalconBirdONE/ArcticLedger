import BaseTable from "./table/baseTable";

function SalesTable({ data }) {
    const columns = [
        { key: "id", header: "ID" },
        { key: "name", header: "Customer" },
        { key: "amount", header: "Amount" }
    ];

    return <BaseTable data={data} columns={columns} />;
}

export default SalesTable;