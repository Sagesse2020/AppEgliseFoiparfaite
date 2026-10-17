
import { useState } from 'react';
import { Link } from '@inertiajs/react';

const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Notre église', href: '/eglise' },
    { label: 'Départements', href: '/departements' },
    { label: 'Prédications', href: '/predications' },
    { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
                        É
                    </span>

                    <span>
                        <span className="block text-lg font-black tracking-tight text-slate-950">
                            APPEGLISE
                        </span>
                        <span className="block text-xs text-slate-500">
                            Présentation & gestion
                        </span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-7 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    aria-expanded={menuOpen}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-xl text-slate-900 md:hidden"
                >
                    {menuOpen ? '×' : '☰'}
                </button>
            </div>

            {menuOpen && (
                <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
