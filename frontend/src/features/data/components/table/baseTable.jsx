function BaseTable({ data, columns }) {
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    {columns.map(col => (
                        <th key={col.key}>{col.header}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map(col => (
                            <td key={col.key}>
                                {row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BaseTable;