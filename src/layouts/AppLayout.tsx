import React from 'react';
import './AppLayout.css';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <aside className="app-sidebar">
                <div className="sidebar-title">Design System</div>
                <nav>
                    {/* Placeholder Nav Items */}
                    <div style={{ padding: '8px 0', opacity: 0.8 }}>WAF Rules</div>
                    <div style={{ padding: '8px 0', opacity: 0.5 }}>Settings</div>
                </nav>
            </aside>
            <div className="content-wrapper">
                <header className="app-header">
                    {/* Header Content */}
                    <div style={{ fontWeight: 600 }}>Enterprise WAF Platform</div>
                </header>
                <main className="app-main">
                    <div className="grid-container">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};
