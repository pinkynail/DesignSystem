
import React from 'react';
import { cn } from '../../lib/utils';
import './Table.css';

export interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (item: T) => React.ReactNode;
    align?: 'left' | 'center' | 'right';
    width?: string;
    className?: string; // Allow custom classes per column
}

export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    keyField: keyof T;
    className?: string;
    actions?: (item: T) => React.ReactNode; // Optional row actions
}

export function Table<T extends Record<string, any>>({
    data,
    columns,
    keyField,
    className,
    actions
}: TableProps<T>) {
    return (
        <div className={cn('table-container', className)}>
            <table className="data-table">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                style={{ textAlign: col.align || 'left', width: col.width }}
                                className={col.className}
                            >
                                {col.header}
                            </th>
                        ))}
                        {actions && <th className="actions-header">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={String(row[keyField])}>
                            {columns.map((col, index) => (
                                <td
                                    key={index}
                                    style={{ textAlign: col.align || 'left' }}
                                    className={col.className}
                                >
                                    {col.render ? col.render(row) : row[col.key as string]}
                                </td>
                            ))}
                            {actions && (
                                <td className="actions-cell">
                                    {actions(row)}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

