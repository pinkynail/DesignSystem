import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    fullWidth = false,
    className = '',
    ...props
}, ref) => {
    return (
        <div className={cn('input-wrapper', fullWidth && 'input-full-width', className)}>
            {label && <label className="input-label">{label}</label>}
            <input
                ref={ref}
                className={cn('input-field', error && 'input-error')}
                {...props}
            />
            {error && <span className="input-error-msg">{error}</span>}
        </div>
    );
});

Input.displayName = 'Input';
