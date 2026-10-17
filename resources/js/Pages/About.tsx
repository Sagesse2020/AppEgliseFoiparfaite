
import { Head } from '@inertiajs/react';
import PublicLayout from '../Layouts/PublicLayout';

const values = [
    {
        title: 'La foi',
        description:
            'Placer la foi au cœur de notre engagement et de notre cheminement spirituel.',
        number: '01',
    },
    {
        title: 'La communion',
        description:
            'Favoriser l’unité, l’écoute et les relations fraternelles entre les membres.',
        number: '02',
    },
    {
        title: 'Le service',
        description:
            'Mettre les talents de chacun au service de la communauté.',
        number: '03',
    },
];

export default function About() {
    return (
        <PublicLayout>
            <Head title="Notre église" />

            <main>
                <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Qui sommes-nous ?
                        </p>

                        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
                            Une communauté unie par la foi et le service.
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                            Découvrez notre vision, notre mission et les
                            valeurs qui guident notre communauté au quotidien.
                        </p>
                    </div>
                </section>

                <section className="px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                                Notre identité
                            </p>

                            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
                                Une église tournée vers la croissance spirituelle.
                            </h2>
                        </div>

                        <div className="space-y-5 text-base leading-8 text-slate-600">
                            <p>
                                Notre église souhaite offrir un cadre
                                d’accueil, d’apprentissage et de communion
                                dans lequel chaque personne peut trouver
                                sa place.
                            </p>

                            <p>
                                À travers l’enseignement, la fraternité et
                                le service, notre communauté aspire à
                                encourager chacun à grandir dans sa foi
                                et à contribuer positivement à la société.
                            </p>

                            <p className="text-sm text-slate-500">
                                Ce contenu pourra être personnalisé avec
                                l’histoire réelle de l’église, le nom du
                                pasteur et sa vision officielle.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                                Nos valeurs
                            </p>

                            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
                                Les principes qui nous rassemblent.
                            </h2>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {values.map((value) => (
                                <article
                                    key={value.number}
                                    className="rounded-3xl border border-slate-200 bg-white p-7"
                                >
                                    <p className="text-sm font-black text-blue-600">
                                        {value.number}
                                    </p>

                                    <h3 className="mt-5 text-xl font-black text-slate-950">
                                        {value.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {value.description}
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
