import { WafRule, RuleStatus, Severity, WafAction } from '../types';

const SEVERITIES: Severity[] = ['low', 'medium', 'high', 'critical'];
const STATUSES: RuleStatus[] = ['active', 'inactive', 'learning'];
const ACTIONS: WafAction[] = ['block', 'allow', 'challenge', 'log'];
const TAGS = ['OWASP', 'SQLi', 'XSS', 'RCE', 'Bot', 'DDoS', 'ZeroDay'];

// Helper to get random item from array
const getRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Helper to generate realistic targets
const generateTarget = (index: number): string => {
    const types = ['ipv4', 'ipv6', 'domain'];
    const type = getRandom(types);

    if (type === 'ipv6') {
        return `2001:0db8:85a3:0000:0000:8a2e:0370:${7334 + index}`;
    } else if (type === 'domain') {
        // Generate long domain names occasionally
        if (Math.random() > 0.7) {
            return `internal-api-${index}.staging.kubernetes.cluster.region-${Math.floor(Math.random() * 99)}.enterprise-system.com`;
        }
        return `api-${index}.example.com`;
    }
    return `192.168.1.${index % 255}`;
};

export const generateMockRules = (count: number): WafRule[] => {
    return Array.from({ length: count }, (_, i) => {
        const severity = getRandom(SEVERITIES);
        const status = getRandom(STATUSES);

        // Generate 1-3 random tags
        const ruleTags = Array.from(
            { length: Math.floor(Math.random() * 3) + 1 },
            () => getRandom(TAGS)
        );
        // Remove duplicates
        const uniqueTags = [...new Set(ruleTags)];

        return {
            id: `rule-${i + 1000}`,
            name: `WAF Rule ${i + 1}: ${getRandom(['Block', 'Detect', 'Monitor'])} ${getRandom(['SQL Injection', 'Cross-Site Scripting', 'Bad Bot', 'Anomaly'])}`,
            description: `Automatically created rule to mitigate ${uniqueTags[0]} pattern detected in incoming traffic.`,
            status,
            severity,
            action: getRandom(ACTIONS),
            target: generateTarget(i),
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
            updatedAt: new Date().toISOString(),
            tags: uniqueTags,
        };
    });
};
