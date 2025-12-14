import { useState, useMemo } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Trash2, Edit2 } from 'lucide-react';
import { WafRulesTable } from '../waf/components/WafRulesTable';
import { generateMockRules } from '../waf/lib/mockData';

export function DemoPage() {
    const [inputValue, setInputValue] = useState('');

    // Generate centralized mock data
    const rules = useMemo(() => generateMockRules(20), []);

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

                <Card title="WAF Rules (Stress Test Data)">
                    {/* Constrain height to demonstrate sticky header */}
                    <div style={{ maxHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                        <WafRulesTable rules={rules} />
                    </div>
                </Card>
            </section>

        </div>
    )
}
