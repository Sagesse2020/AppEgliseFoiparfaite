import { Head } from '@inertiajs/react';
import PublicLayout from '../Layouts/PublicLayout';


const departments = [
    {
        name: 'Louange & Adoration',
        description:
            'Un espace consacré à la louange, à la musique et à l’accompagnement des cultes.',
        icon: '♪',
    },
    {
        name: 'Jeunesse',
        description:
            'Un cadre pour accompagner les jeunes dans leur croissance, leurs projets et leur engagement.',
        icon: '◉',
    },
    {
        name: 'Enfants',
        description:
            'Un environnement adapté pour transmettre les valeurs, la foi et favoriser l’épanouissement.',
        icon: '✦',
    },
    {
        name: 'Action sociale',
        description:
            'Des initiatives d’entraide et de solidarité au service des membres et de la communauté.',
        icon: '♡',
    },
];

const news = [
    {
        category: 'Vie de l’église',
        title: 'Un nouveau temps fort pour notre communauté',
        date: '28 septembre 2026',
    },
    {
        category: 'Enseignement',
        title: 'Retrouvez nos dernières prédications',
        date: '24 septembre 2026',
    },
    {
        category: 'Événement',
        title: 'Prochain rendez-vous communautaire',
        date: '20 septembre 2026',
    },
];

export default function Home() {
    return (
        <PublicLayout>
            <Head title="Accueil" />

                    {/* Hero */}
                    <section
                        id="accueil"
                        className="relative overflow-hidden bg-slate-950 pt-20 text-white"
                    >
                        <div className="absolute inset-0">
                            <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
                            <div className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />
                        </div>
                        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                            <div className="max-w-3xl">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                                    Bienvenue dans notre communauté
                                </div>
                                <h1 className="text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
                                    Une église,
                                    <span className="block text-slate-400">
                                        une communauté,
                                    </span>
                                    <span className="block text-cyan-400">
                                        un même engagement.
                                    </span>
                                </h1>
                                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                                    Découvrez notre vision, nos activités,
                                    nos départements, nos événements et toutes
                                    les ressources qui font vivre notre
                                    communauté.
                                </p>
                                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href="#eglise"
                                        className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
                                    >
                                        Découvrir notre église
                                    </a>
                                    <a
                                        href="#evenements"
                                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                                    >
                                        Voir les événements
                                    </a>
                                </div>
                                <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
                                    <div>
                                        <p className="text-3xl font-black">
                                            01
                                        </p>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Communauté
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black">
                                            04
                                        </p>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Axes majeurs
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black">
                                            365
                                        </p>
                                        <p className="mt-1 text-sm text-slate-400">
                                            Jours d’engagement
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
                                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                                    <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 p-8 sm:p-10">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-sm font-semibold text-cyan-400">
                                                    À découvrir
                                                </p>
                                                <h2 className="mt-2 text-3xl font-black">
                                                    Nos cultes
                                                </h2>
                                            </div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                                                ✦
                                            </div>
                                        </div>
                                        <div className="mt-10 space-y-3">
                                            {[
                                                ['Dimanche', '09:00', 'Culte principal'],
                                                ['Lundi', '18:00', 'Temps de prière'],
                                                ['Mercredi', '17:30', 'Enseignement'],
                                                ['Vendredi', '17:30', 'Enseignement'],
                                            ].map(([day, time, label]) => (
                                                <div
                                                    key={day}
                                                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                                                >
                                                    <div>
                                                        <p className="font-bold">
                                                            {day}
                                                        </p>
                                                        <p className="mt-1 text-sm text-slate-400">
                                                            {label}
                                                        </p>
                                                    </div>
                                                    <p className="font-black text-cyan-400">
                                                        {time}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <a
                                            href="#contact"
                                            className="mt-6 flex items-center justify-center rounded-2xl bg-white px-5 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
                                        >
                                            Planifier ma visite
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About */}
                    <section id="eglise" className="py-24 sm:py-28">
                        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                                    Notre église
                                </p>
                                <h2 className="mt-4 max-w-xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                                    Une présence qui rassemble et qui construit.
                                </h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-lg leading-8 text-slate-600">
                                    Notre communauté met l’accent sur
                                    l’accueil, la transmission, le service et
                                    la construction d’un environnement où
                                    chacun peut trouver sa place.
                                </p>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    {[
                                        ['Vision', 'Une communauté tournée vers l’avenir.'],
                                        ['Mission', 'Servir, accompagner et transmettre.'],
                                        ['Valeurs', 'Foi, intégrité, respect et solidarité.'],
                                    ].map(([title, description]) => (
                                        <div
                                            key={title}
                                            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                                        >
                                            <p className="font-black text-slate-950">
                                                {title}
                                            </p>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                {description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Departments */}
                    <section
                        id="departements"
                        className="bg-slate-50 py-24 sm:py-28"
                    >
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="max-w-2xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                                    Organisation
                                </p>
                                <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                                    Des départements pour servir ensemble.
                                </h2>
                                <p className="mt-5 text-lg leading-8 text-slate-600">
                                    Une organisation structurée pour permettre
                                    à chaque membre de participer à la vie de
                                    la communauté selon ses dons et ses
                                    responsabilités.
                                </p>
                            </div>
                            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                                {departments.map((department) => (
                                    <article
                                        key={department.name}
                                        className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl font-bold text-white">
                                            {department.icon}
                                        </div>
                                        <h3 className="mt-6 text-xl font-black text-slate-950">
                                            {department.name}
                                        </h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-600">
                                            {department.description}
                                        </p>
                                        <a
                                            href="#contact"
                                            className="mt-6 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
                                        >
                                            En savoir plus →
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Event */}
                    <section id="evenements" className="py-24 sm:py-28">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white">
                                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                                    <div className="p-8 sm:p-12 lg:p-16">
                                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                                            Prochain événement
                                        </p>
                                        <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                                            Un moment pour se retrouver,
                                            apprendre et avancer ensemble.
                                        </h2>
                                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                                            Notre calendrier permettra bientôt
                                            de consulter les événements, de
                                            découvrir leur programme et de
                                            s’inscrire directement en ligne.
                                        </p>
                                        <a
                                            href="#contact"
                                            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
                                        >
                                            Découvrir l’événement
                                        </a>
                                    </div>
                                    <div className="border-t border-white/10 bg-white/5 p-8 sm:p-12 lg:border-l lg:border-t-0">
                                        <p className="text-sm font-semibold text-slate-400">
                                            À retenir
                                        </p>
                                        <div className="mt-7 space-y-5">
                                            <div>
                                                <p className="text-sm text-slate-400">
                                                    Date
                                                </p>
                                                <p className="mt-1 text-xl font-black">
                                                    À venir
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-400">
                                                    Lieu
                                                </p>
                                                <p className="mt-1 text-xl font-black">
                                                    Église
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-slate-400">
                                                    Participation
                                                </p>
                                                <p className="mt-1 text-xl font-black">
                                                    Ouverte à tous
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Predications / News */}
                    <section
                        id="predications"
                        className="bg-slate-50 py-24 sm:py-28"
                    >
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                                        Ressources
                                    </p>
                                    <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                                        Actualités & enseignements
                                    </h2>
                                </div>
                                <a
                                    href="#contact"
                                    className="text-sm font-bold text-blue-600 hover:text-blue-700"
                                >
                                    Voir toutes les publications →
                                </a>
                            </div>
                            <div className="mt-12 grid gap-5 lg:grid-cols-3">
                                {news.map((item) => (
                                    <article
                                        key={item.title}
                                        className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                                    >
                                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                                            {item.category}
                                        </span>
                                        <h3 className="mt-6 text-2xl font-black leading-tight text-slate-950">
                                            {item.title}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-500">
                                            {item.date}
                                        </p>
                                        <a
                                            href="#contact"
                                            className="mt-7 inline-flex text-sm font-bold text-slate-950"
                                        >
                                            Lire la suite →
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section id="contact" className="py-24 sm:py-28">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="rounded-[2rem] bg-blue-600 px-8 py-14 text-white sm:px-12 lg:px-16">
                                <div className="max-w-3xl">
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                                        Une question ?
                                    </p>
                                    <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                                        Faisons connaissance.
                                    </h2>
                                    <p className="mt-5 text-lg leading-8 text-blue-100">
                                        Les fonctionnalités de contact,
                                        d’inscription, de documents et de
                                        gestion seront intégrées
                                        progressivement dans l’application.
                                    </p>
                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                        <a
                                            href="mailto:contact@example.com"
                                            className="inline-flex justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                                        >
                                            Nous contacter
                                        </a>
                                        <a
                                            href="#accueil"
                                            className="inline-flex justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                                        >
                                            Retour en haut
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                      </PublicLayout>
    );
}