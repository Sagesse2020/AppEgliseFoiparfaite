import type { ReactNode } from 'react';
import SiteHeader from '../Components/SiteHeader';
import SiteFooter from '../Components/SiteFooter';

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <SiteHeader />

            {children}

            <SiteFooter />
        </div>
    );
}