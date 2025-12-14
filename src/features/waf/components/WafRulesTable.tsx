import React, { useMemo } from 'react';
import { Table, type Column } from '../../../components/ui/Table';
import { Badge } from '../../../components/ui/Badge';
import { RuleActionSet } from './RuleActionSet';
import { generateMockRules } from '../lib/mockData';
import type { WafRule } from '../types';
import './WafRulesTable.css';

interface WafRulesTableProps {
    rules?: WafRule[];
}

export const WafRulesTable: React.FC<WafRulesTableProps> = ({ rules }) => {
    // specific fallback if no rules provided
    const defaultRules = useMemo(() => generateMockRules(20), []);
    const displayData = rules || defaultRules;

    const columns: Column<WafRule>[] = [
        {
            key: 'id',
            header: 'Rule ID',
            width: '120px',
            render: (rule) => <code style={{ fontSize: '12px' }}>{rule.id}</code>
        },
        {
            key: 'name',
            header: 'Rule Name',
            className: 'col-name'
        },
        {
            key: 'target',
            header: 'Target',
            className: 'col-target',
            render: (rule) => <span className="font-mono text-sm">{rule.target}</span>
        },
        {
            key: 'severity',
            header: 'Severity',
            width: '100px',
            render: (rule) => {
                const variant = rule.severity === 'critical' ? 'critical' :
                    rule.severity === 'high' ? 'warning' :
                        rule.severity === 'medium' ? 'default' : 'default';
                return <Badge variant={variant}>{rule.severity}</Badge>;
            }
        },
        {
            key: 'status',
            header: 'Status',
            width: '100px',
            render: (rule) => (
                <Badge variant={rule.status === 'active' ? 'success' : 'default'}>
                    {rule.status.toUpperCase()}
                </Badge>
            )
        },
        {
            key: 'action',
            header: 'Action',
            width: '100px',
            render: (rule) => <span style={{ textTransform: 'capitalize' }}>{rule.action}</span>
        }
    ];

    return (
        <div className="waf-table-wrapper">
            <Table
                data={displayData}
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
