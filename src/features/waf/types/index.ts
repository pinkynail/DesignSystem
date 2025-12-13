export type RuleStatus = 'active' | 'inactive' | 'learning';

export type Severity = 'high' | 'medium' | 'low' | 'critical';

export type WafAction = 'block' | 'allow' | 'challenge' | 'log';

export interface WafRule {
    id: string;
    name: string;
    description: string;
    status: RuleStatus;
    severity: Severity;
    action: WafAction;
    target: string; // e.g., IP, Domain, Path
    createdAt: string;
    updatedAt: string;
    tags: string[]; // e.g., "OWASP", "SQLi"
}
