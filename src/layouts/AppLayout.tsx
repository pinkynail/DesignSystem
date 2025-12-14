import React from 'react';
import { AppSidebar } from '../components/ui/AppSidebar';
import { AppHeader } from '../components/ui/AppHeader';
import './AppLayout.css';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <AppSidebar />
            <div className="content-wrapper">
                <AppHeader />
                <main className="app-main">
                    <div className="grid-container">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};
