import React from 'react';
import './AppSidebar.css';

export const AppSidebar: React.FC = () => {
    return (
        <aside className="app-sidebar">
            <div className="sidebar-title">Design System</div>
            <nav>
                {/* Placeholder Nav Items */}
                <div style={{ padding: '8px 0', opacity: 0.8 }}>WAF Rules</div>
                <div style={{ padding: '8px 0', opacity: 0.5 }}>Settings</div>
            </nav>
        </aside>
    );
};
