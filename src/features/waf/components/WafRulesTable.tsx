import React, { useMemo } from 'react';
import { Table, type Column } from '../../../components/ui/Table';
import { Badge } from '../../../components/ui/Badge';
import { RuleActionSet } from './RuleActionSet';
import './WafRulesTable.css';

// 1. Mock Data Generation
interface WafRule {
    id: string;
    priority: number;
    name: string;
    source: string;
    target: string;
    tags: string[];
    status: 'active' | 'inactive';
    hits: number;
}

const generateMockRules = (count: number): WafRule[] => {
    return Array.from({ length: count }).map((_, i) => {
        // Stress test IPv6 on some rows
        const isIPv6 = i < 3;
        const source = isIPv6
            ? '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
            : `192.168.${i}.${Math.floor(Math.random() * 255)}/24`;

        return {
            id: `rule-${Math.random().toString(36).substr(2, 6)}`,
            priority: 100 + i * 10,
            name: `Block Malicious IP Range ${i + 1}`,
            source,
            target: 'All Apps',
            tags: i % 2 === 0 ? ['security', 'block'] : ['geo', 'rate-limit'],
            status: Math.random() > 0.3 ? 'active' : 'inactive',
            hits: Math.floor(Math.random() * 10000)
        };
    });
};

export const WafRulesTable: React.FC = () => {
    const data = useMemo(() => generateMockRules(20), []);

    const columns: Column<WafRule>[] = [
        {
            key: 'priority',
            header: 'Pri',
            className: 'col-priority',
            align: 'right',
            width: '50px'
        },
        {
            key: 'id',
            header: 'ID',
            className: 'col-id'
        },
        {
            key: 'name',
            header: 'Rule Name',
            className: 'col-name'
        },
        {
            key: 'source',
            header: 'Source / Target',
            className: 'col-source-target',
            render: (rule) => (
                <span>
                    {rule.source} <span style={{ color: 'var(--color-text-secondary)' }}>→</span> {rule.target}
                </span>
            )
        },
        {
            key: 'tags',
            header: 'Tags',
            render: (rule) => (
                <div className="tags-cell">
                    {rule.tags.map(tag => (
                        <Badge key={tag} variant="default">{tag}</Badge>
                    ))}
                </div>
            )
        },
        {
            key: 'status',
            header: 'Status',
            render: (rule) => (
                <Badge variant={rule.status === 'active' ? 'success' : 'default'}>
                    {rule.status.toUpperCase()}
                </Badge>
            )
        },
        {
            key: 'hits',
            header: 'Hits',
            className: 'col-hits',
            align: 'right',
            width: '70px',
            render: (rule) => rule.hits.toLocaleString()
        }
    ];

    return (
        <div className="waf-table-wrapper">
            <Table
                data={data}
                columns={columns}
                keyField="id"
                actions={(rule) => (
                    <RuleActionSet
                        onEdit={() => console.log('Edit', rule.id)}
                        onDelete={() => console.log('Delete', rule.id)}
                        onToggle={() => console.log('Toggle', rule.id)}
                    />
                )}
            />
        </div>
    );
};
