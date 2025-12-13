import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Table } from '../../components/ui/Table';
import { Trash2, Edit2, Download } from 'lucide-react';

// Mock Data for Table
interface LogEntry {
    id: string;
    timestamp: string;
    ip: string;
    method: string;
    path: string;
    status: number;
    latency: string;
}

const tableData: LogEntry[] = [
    { id: 'REQ-001', timestamp: '2023-10-27 10:00:01', ip: '192.168.1.1', method: 'GET', path: '/api/v1/users', status: 200, latency: '45ms' },
    { id: 'REQ-002', timestamp: '2023-10-27 10:00:05', ip: '192.168.1.15', method: 'POST', path: '/api/v1/auth', status: 401, latency: '120ms' },
    { id: 'REQ-003', timestamp: '2023-10-27 10:01:22', ip: '10.0.0.5', method: 'GET', path: '/dashboard', status: 200, latency: '200ms' },
    { id: 'REQ-004', timestamp: '2023-10-27 10:02:10', ip: '172.16.0.1', method: 'DELETE', path: '/api/v1/logs', status: 403, latency: '15ms' },
    { id: 'REQ-005', timestamp: '2023-10-27 10:05:00', ip: '192.168.1.100', method: 'PUT', path: '/api/v1/settings', status: 200, latency: '85ms' },
    { id: 'REQ-006', timestamp: '2023-10-27 10:06:00', ip: '203.0.113.1', method: 'GET', path: '/api/v1/status', status: 200, latency: '35ms' },
    { id: 'REQ-007', timestamp: '2023-10-27 10:07:00', ip: '198.51.100.1', method: 'HEAD', path: '/health', status: 200, latency: '10ms' },
    { id: 'REQ-008', timestamp: '2023-10-27 10:08:00', ip: '192.0.2.1', method: 'POST', path: '/api/v1/login', status: 500, latency: '500ms' },
    { id: 'REQ-009', timestamp: '2023-10-27 10:09:00', ip: '10.10.10.10', method: 'GET', path: '/metrics', status: 200, latency: '90ms' },
    { id: 'REQ-010', timestamp: '2023-10-27 10:10:00', ip: '172.16.0.5', method: 'GET', path: '/docs', status: 200, latency: '55ms' },
];

const columns = [
    { key: 'id', header: 'Request ID', width: '100px', render: (row: LogEntry) => <code style={{ fontSize: '12px' }}>{row.id}</code> },
    { key: 'timestamp', header: 'Timestamp', width: '160px' },
    { key: 'ip', header: 'Client IP', width: '120px', render: (row: LogEntry) => <span className="font-mono">{row.ip}</span> },
    { key: 'method', header: 'Method', width: '80px', render: (row: LogEntry) => <strong style={{ color: row.method === 'DELETE' ? 'var(--color-semantic-critical)' : 'inherit' }}>{row.method}</strong> },
    { key: 'path', header: 'Path' },
    {
        key: 'status', header: 'Status', width: '80px', render: (row: LogEntry) => {
            const color = row.status >= 500 ? 'var(--color-semantic-critical)' : row.status >= 400 ? 'var(--color-semantic-warning)' : 'var(--color-semantic-success)';
            return <span style={{ color, fontWeight: 600 }}>{row.status}</span>
        }
    },
    { key: 'latency', header: 'Latency', width: '80px', align: 'right' as const },
];

export function DemoPage() {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="demo-page" style={{ padding: 'var(--spacing-10)', maxWidth: '1200px', margin: '0 auto' }}>

            {/* Header */}
            <h1 style={{ marginBottom: 'var(--spacing-2)' }}>Technical Standards & Architecture (Demo)</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-8)' }}>
                Refactored to support feature-based architecture and strict table doctrine.
            </p>

            {/* 4. Controls */}
            <section style={{ marginBottom: 'var(--spacing-10)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-4)', fontSize: '20px' }}>Refactored Components</h2>

                <Card title="Buttons & Inputs" className="mb-4">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-8)', marginBottom: 'var(--spacing-6)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                            <h6>Variants</h6>
                            <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                                <Button>Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="critical">Critical</Button>
                                <Button variant="ghost">Ghost</Button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                            <h6>Iconography</h6>
                            <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                                <Button variant="secondary" size="sm">
                                    <Edit2 className="w-4 h-4 mr-2" /> Edit
                                </Button>
                                <Button variant="critical" size="sm">
                                    Delete <Trash2 className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
                        <h6>Inputs</h6>
                        <Input
                            label="Email Address"
                            placeholder="user@example.com"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            fullWidth
                        />
                    </div>
                </Card>
            </section>

            {/* 5. Data Density & Table Doctrine */}
            <section style={{ marginBottom: 'var(--spacing-10)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
                    <h2 style={{ fontSize: '20px' }}>The Table Doctrine (Sticky Headers + Row Actions)</h2>
                </div>

                <Card
                    title="WAF Logs"
                    actions={<Button size="sm" variant="secondary"><Download className="w-4 h-4 mr-2" /> Export</Button>}
                >
                    {/* Constrain height to demonstrate sticky header */}
                    <div style={{ maxHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                        <Table<LogEntry>
                            data={tableData}
                            columns={columns}
                            keyField="id"
                            actions={(_row) => (
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                    <Button size="sm" variant="ghost" title="Edit"><Edit2 className="w-4 h-4" /></Button>
                                    <Button size="sm" variant="ghost" title="Delete" style={{ color: 'var(--color-semantic-critical)' }}><Trash2 className="w-4 h-4" /></Button>
                                </div>
                            )}
                        />
                    </div>
                </Card>
            </section>

        </div>
    )
}
