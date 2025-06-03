import React from 'react';

const reportData = [
    { id: 1, name: 'John Doe', investment: '$10,000', returns: '$1,200', date: '2024-06-01' },
    { id: 2, name: 'Jane Smith', investment: '$8,000', returns: '$950', date: '2024-06-02' },
    { id: 3, name: 'Alice Johnson', investment: '$12,500', returns: '$1,500', date: '2024-06-03' },
];

const ReportSection = () => (
    <section style={{ padding: '2rem' }}>
        <h2>Investment Report</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>#</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Investment</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Returns</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Date</th>
                </tr>
            </thead>
            <tbody>
                {reportData.map((row) => (
                    <tr key={row.id}>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.id}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.name}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.investment}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.returns}</td>
                        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
);

export default ReportSection;