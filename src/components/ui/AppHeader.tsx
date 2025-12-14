import React from 'react';
import './AppHeader.css';

export const AppHeader: React.FC = () => {
    return (
        <header className="app-header">
            {/* Header Content */}
            <div style={{ fontWeight: 600 }}>Enterprise WAF Platform</div>
        </header>
    );
};
