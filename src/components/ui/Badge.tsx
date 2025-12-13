import React from 'react';
import { cn } from '../../lib/utils';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'critical';
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    className,
    ...props
}) => {
    return (
        <span
            className={cn('badge', `badge-${variant}`, className)}
            {...props}
        >
            {children}
        </span>
    );
};
