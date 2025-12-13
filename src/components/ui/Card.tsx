import React from 'react';
import { cn } from '../../lib/utils';
import './Card.css';

export interface CardProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
    actions?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    children,
    title,
    actions,
    className = ''
}) => {
    return (
        <div className={cn('card', className)}>
            {(title || actions) && (
                <div className="card-header">
                    {title && <h3 className="card-title">{title}</h3>}
                    {actions && <div className="card-actions">{actions}</div>}
                </div>
            )}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};
