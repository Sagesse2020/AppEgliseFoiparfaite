
export default function SiteFooter() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div>
                        <p className="font-black text-slate-950">
                            Église Foi Parfaite
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Présentation et gestion de l’église
                        </p>
                    </div>

                    <div className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Église Foi Parfaite.
                        Tous droits réservés.
                    </div>
                </div>
            </div>
        </footer>
    );
}
