import React from 'react';
import { Button } from '../../../components/ui/Button';
import { Edit2, Trash2, Power } from 'lucide-react';
import './RuleActionSet.css';

interface RuleActionSetProps {
    onEdit?: () => void;
    onDelete?: () => void;
    onToggle?: () => void;
}

export const RuleActionSet: React.FC<RuleActionSetProps> = ({ onEdit, onDelete, onToggle }) => {
    return (
        <div className="rule-action-set">
            <Button variant="ghost" size="sm" onClick={onToggle} title="Toggle Status">
                <Power size={14} />
            </Button>
            <Button variant="ghost" size="sm" onClick={onEdit} title="Edit Rule">
                <Edit2 size={14} />
            </Button>
            <Button variant="ghost" size="sm" onClick={onDelete} title="Delete Rule">
                <Trash2 size={14} className="icon-critical" />
            </Button>
        </div>
    );
};
