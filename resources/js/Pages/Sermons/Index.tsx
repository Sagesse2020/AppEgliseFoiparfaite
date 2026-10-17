
import { Head } from '@inertiajs/react';
import PublicLayout from '../../Layouts/PublicLayout';

const sermons = [
    {
        title: 'Grandir dans la foi',
        category: 'Enseignement biblique',
        description:
            'Un enseignement pour approfondir sa relation avec Dieu et fortifier sa foi.',
    },
    {
        title: 'La puissance de la prière',
        category: 'Vie spirituelle',
        description:
            'Une réflexion sur la place de la prière dans la vie du croyant.',
    },
    {
        title: 'Marcher dans l’amour',
        category: 'Vie chrétienne',
        description:
            'Comprendre comment vivre l’amour, le respect et la solidarité au quotidien.',
    },
];

export default function SermonsIndex() {
    return (
        <PublicLayout>
            <Head title="Prédications et enseignements" />

            <main>
                <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Ressources spirituelles
                        </p>

                        <h1 className="mt-5 max-w-4xl text-4xl font-black sm:text-6xl">
                            Prédications et enseignements.
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                            Retrouvez des ressources pour nourrir votre foi
                            et approfondir votre compréhension des
                            enseignements bibliques.
                        </p>
                    </div>
                </section>

                <section className="px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {sermons.map((sermon) => (
                                <article
                                    key={sermon.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                                >
                                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                                        {sermon.category}
                                    </span>

                                    <h2 className="mt-6 text-2xl font-black text-slate-950">
                                        {sermon.title}
                                    </h2>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        {sermon.description}
                                    </p>

                                    <p className="mt-6 border-t border-slate-100 pt-5 text-sm text-slate-500">
                                        Ressource à publier prochainement
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}
