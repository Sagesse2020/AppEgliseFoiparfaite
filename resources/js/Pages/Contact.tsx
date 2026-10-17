
import { Head } from '@inertiajs/react';
import PublicLayout from '../Layouts/PublicLayout';

export default function Contact() {
    return (
        <PublicLayout>
            <Head title="Contact" />

            <main>
                <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Restons en contact
                        </p>

                        <h1 className="mt-5 max-w-4xl text-4xl font-black sm:text-6xl">
                            Nous serons heureux d’échanger avec vous.
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                            Une question sur l’église ou besoin d’informations ?
                            Retrouvez prochainement ici les moyens de nous joindre.
                        </p>
                    </div>
                </section>

                <section className="px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 p-8 sm:p-10">
                        <h2 className="text-2xl font-black text-slate-950">
                            Informations de contact
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600">
                            Les coordonnées officielles de l’église seront
                            ajoutées après validation.
                        </p>

                        <div className="mt-8 space-y-5">
                            <div className="border-t border-slate-100 pt-5">
                                <p className="text-sm font-semibold text-slate-500">
                                    Adresse
                                </p>
                                <p className="mt-1 font-bold text-slate-950">
                                    À compléter
                                </p>
                            </div>

                            <div className="border-t border-slate-100 pt-5">
                                <p className="text-sm font-semibold text-slate-500">
                                    Téléphone
                                </p>
                                <p className="mt-1 font-bold text-slate-950">
                                    À compléter
                                </p>
                            </div>

                            <div className="border-t border-slate-100 pt-5">
                                <p className="text-sm font-semibold text-slate-500">
                                    Adresse e-mail
                                </p>
                                <p className="mt-1 font-bold text-slate-950">
                                    À compléter
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}
