
import { Head } from '@inertiajs/react';
import PublicLayout from '../../Layouts/PublicLayout';

const departments = [
    {
        name: 'Louange & Adoration',
        description:
            'Contribuer à la louange et à l’accompagnement musical des cultes.',
        responsibility: 'Louange, chant et musique',
        number: '01',
    },
    {
        name: 'Jeunesse',
        description:
            'Accompagner les jeunes dans leur croissance spirituelle et leur engagement.',
        responsibility: 'Accompagnement des jeunes',
        number: '02',
    },
    {
        name: 'Enfants',
        description:
            'Participer à l’éveil spirituel et à l’épanouissement des enfants.',
        responsibility: 'Encadrement des enfants',
        number: '03',
    },
    {
        name: 'Action sociale',
        description:
            'Encourager l’entraide et la solidarité au sein de la communauté.',
        responsibility: 'Entraide et solidarité',
        number: '04',
    },
];

export default function DepartmentsIndex() {
    return (
        <PublicLayout>
            <Head title="Nos départements" />

            <main>
                <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Notre organisation
                        </p>

                        <h1 className="mt-5 max-w-4xl text-4xl font-black sm:text-6xl">
                            Des talents différents, une même vision.
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                            Découvrez les départements qui contribuent
                            au fonctionnement et à la vie de notre église.
                        </p>
                    </div>
                </section>

                <section className="px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {departments.map((department) => (
                                <article
                                    key={department.number}
                                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                                        {department.number}
                                    </span>

                                    <h2 className="mt-6 text-xl font-black text-slate-950">
                                        {department.name}
                                    </h2>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        {department.description}
                                    </p>

                                    <div className="mt-6 border-t border-slate-100 pt-5">
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                            Domaine de responsabilité
                                        </p>

                                        <p className="mt-2 text-sm font-semibold text-blue-700">
                                            {department.responsibility}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}
