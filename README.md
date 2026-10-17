AppEglise — Église Foi Parfaite
Application web de présentation et de gestion de l’Église Foi Parfaite, développée avec Laravel, React, Inertia.js et MySQL.
État du projet : en cours de développement. Les pages publiques et le socle des rôles/permissions ont été commencés. L’authentification complète, les tableaux de bord privés et les modules de gestion doivent encore être finalisés et testés.

Sommaire
- Présentation
- Fonctionnalités et avancement
- Technologies
- Rôles et permissions
- Structure du projet
- Installation locale
- Configuration de la base de données
- Migrations et données initiales
- Lancement de l’application
- Routes publiques prévues
- Sécurité
- Prochaines étapes
Présentation
AppEglise a pour objectif de proposer un site web public pour présenter l’Église Foi Parfaite ainsi qu’un espace privé pour faciliter sa gestion administrative.
Le site public doit permettre aux visiteurs de découvrir l’église, ses départements, ses prédications et ses informations de contact. L’espace privé sera organisé selon les rôles et les permissions de chaque utilisateur.
Le projet utilise Laravel pour le serveur et la logique métier, React avec TypeScript pour les interfaces, Inertia.js pour faire le lien entre les deux et MySQL pour stocker les données.
Fonctionnalités et avancement
Pages publiques déjà amorcées
- Accueil : Home.tsx
- Présentation de l’église : About.tsx
- Départements : Departments/Index.tsx
- Prédications : Sermons/Index.tsx
- Contact : Contact.tsx
- Éléments communs de l’interface : en-tête, pied de page et mise en page publique
Certaines informations affichées dans les pages peuvent encore être des exemples ou des contenus provisoires : elles doivent être remplacées ou confirmées avant la mise en production.
Socle technique déjà commencé
- Connexion de Laravel à la base MySQL eglise_db en environnement local.
- Tables de rôles et de permissions.
- Tables de liaison entre les utilisateurs et les rôles, puis entre les rôles et les permissions.
- Seeders de rôles, de permissions et d’associations.
- Méthodes de modèle prévues pour vérifier les rôles et permissions, ainsi qu’un middleware de contrôle d’accès.
À finaliser ou à vérifier
- Pages et contrôleurs d’authentification : inscription, connexion, déconnexion, récupération et réinitialisation du mot de passe.
- Attribution automatique du rôle visiteur lors d’une inscription publique.
- Création sécurisée du premier compte administrateur.
- Tableaux de bord privés et redirections selon le rôle.
- Modules de gestion et formulaires reliés à la base de données.
- Vérification des autorisations dans les routes et dans les contrôleurs.
- Tests fonctionnels, accessibilité, validation et préparation au déploiement.
Périmètre : les modules de gestion des activités et des présences ne font pas partie du périmètre retenu.
Technologies
Élément	Technologie
Serveur et logique métier	PHP 8.3 / Laravel 11
Interfaces	React + TypeScript
Liaison serveur-interface	Inertia.js
Styles	Tailwind CSS
Base de données	MySQL
Dépendances PHP	Composer
Dépendances JavaScript	Node.js et npm
Compilation des ressources	Vite
Environnement local utilisé	Windows, PowerShell et Laragon


Rôles et permissions
L’application prévoit six rôles distincts :
Rôle	Responsabilité prévue
Pasteur	Consultation générale et suivi spirituel de l’église, dont la consultation des rapports autorisés.
Administrateur	Gestion technique, des comptes autorisés, des rôles, des départements, des publications et des paramètres.
Trésorier	Consultation, enregistrement et modification des opérations financières, ainsi que consultation des rapports financiers.
Responsable de département	Consultation des informations de son département et des publications autorisées. Les limites par département devront être appliquées côté serveur.
Membre	Accès aux fonctionnalités réservées aux membres.
Visiteur	Accès limité ; les pages publiques restent consultables sans connexion.


Les permissions enregistrées comprennent notamment :
- Utilisateurs : users.view, users.create, users.update, users.delete.
- Rôles et permissions : roles.view, roles.manage, permissions.manage.
- Départements : departments.view, departments.manage.
- Membres : members.view, members.manage.
- Finances : finances.view, finances.create, finances.update, finances.delete, finances.reports.
- Publications : publications.view, publications.manage.
- Paramètres : settings.view, settings.manage.
La matrice actuelle est un point de départ. Les droits doivent être vérifiés par le serveur et ajustés lorsque les modules métier seront construits. Par prudence, la suppression des opérations financières n’est accordée à aucun rôle dans la matrice initiale.
Structure du projet
Voici les principaux emplacements utilisés :
eglise-app/
├── app/
│   ├── Http/
│   │   ├── Controllers/       # Contrôleurs Laravel
│   │   └── Middleware/        # Contrôles d’accès
│   └── Models/
│       ├── User.php
│       ├── Role.php
│       └── Permission.php
├── bootstrap/
│   └── app.php                # Configuration Laravel et alias de middleware
├── database/
│   ├── migrations/            # Structure des tables
│   └── seeders/               # Rôles, permissions et associations
├── resources/
│   ├── js/
│   │   ├── Components/        # Éléments React réutilisables
│   │   ├── Layouts/           # Mises en page
│   │   └── Pages/             # Pages Inertia/React
│   └── css/
├── routes/
│   └── web.php                # Routes web
├── .env                       # Configuration locale, à ne pas versionner
├── package.json
└── composer.json
La structure peut évoluer avec l’ajout de l’authentification et des modules de gestion.
Installation locale
Prérequis
Installer ou vérifier les éléments suivants :
- PHP 8.3 avec les extensions requises par Laravel et le pilote MySQL (pdo_mysql).
- Composer.
- Node.js et npm.
- MySQL, par exemple via Laragon.
1. Récupérer le projet
Depuis le dossier du projet, ouvrir PowerShell. Si le dépôt est cloné dans un nouveau dossier, se placer dans ce dossier avant de continuer.
composer install
npm install
2. Préparer le fichier d’environnement
Si le fichier .env n’existe pas encore, créer une copie de .env.example :
Copy-Item .env.example .env
Configurer ensuite les paramètres locaux dans .env. Pour l’environnement de développement utilisé par ce projet, la configuration de base est :
APP_NAME=AppEglise
APP_ENV=local
APP_DEBUG=true
APP_URL=http://127.0.0.1:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=eglise_db
DB_USERNAME=root
DB_PASSWORD=
Adapter le nom d’utilisateur et le mot de passe selon sa propre installation MySQL. Ne jamais publier le fichier .env ou y copier des identifiants de production.
Créer la base eglise_db dans MySQL/phpMyAdmin si elle n’existe pas. Puis, si APP_KEY est vide, générer la clé :
php artisan key:generate
Ne pas régénérer la clé d’une installation déjà en service sans comprendre les conséquences pour les sessions et les données chiffrées.
Configuration de la base de données
Les tables principales du système d’autorisations sont :
Table	Rôle
users	Comptes utilisateurs Laravel.
roles	Liste des rôles et leur identifiant textuel (slug).
permissions	Liste des permissions et leur slug.
role_user	Association entre les utilisateurs et les rôles.
permission_role	Association entre les rôles et les permissions.


Les tables Laravel standard — par exemple cache, jobs et migrations — peuvent également être présentes selon la configuration du projet.
Migrations et données initiales
Exécuter les migrations :
php artisan migrate
Les seeders de rôles et permissions sont lancés séparément afin de pouvoir contrôler chaque étape :
php artisan db:seed --class=RoleSeeder
php artisan db:seed --class=PermissionSeeder
php artisan db:seed --class=RolePermissionSeeder
Le lancement de RolePermissionSeeder suppose que les tables roles, permissions et permission_role existent correctement, avec les colonnes role_id et permission_id dans la table de liaison.
Pour vérifier les migrations :
php artisan migrate:status
Pour vérifier le nombre de permissions et d’associations avec Tinker :
php artisan tinker
Puis, dans Tinker :
DB::table('roles')->count();
DB::table('permissions')->count();
DB::table('permission_role')->count();
À la date de rédaction, la configuration attendue comprend 6 rôles, 20 permissions et 28 associations rôle-permission. Les nombres peuvent évoluer si la matrice des autorisations change.
Lancement de l’application
Ouvrir un premier terminal PowerShell et lancer Laravel :
php artisan serve
Ouvrir un second terminal PowerShell et lancer Vite :
npm run dev
L’application est alors généralement disponible à l’adresse :
- Site web local : http://127.0.0.1:8000
Pour générer les ressources frontend destinées à une compilation de production :
npm run build
Commandes utiles en cas de problème de cache ou de configuration :
php artisan optimize:clear
php artisan route:list
Routes publiques prévues
Les routes publiques configurées pour le site sont :
URL	Page
/	Accueil
/eglise	Présentation de l’église
/departements	Départements
/predications	Prédications
/contact	Contact


Ces pages doivent rester accessibles sans connexion, sauf décision fonctionnelle contraire. Les routes privées de gestion devront utiliser l’authentification et les contrôles d’autorisation appropriés une fois le module d’authentification finalisé.
Sécurité
- Ne pas autoriser les visiteurs à choisir leur rôle lors de l’inscription.
- Attribuer un rôle de base, comme visiteur, côté serveur après validation de l’inscription.
- Réserver l’attribution du rôle Administrateur à une procédure initiale contrôlée et à des utilisateurs autorisés.
- Appliquer les permissions côté serveur, pas seulement en masquant des boutons dans React.
- Vérifier les autorisations dans les contrôleurs ou politiques pour chaque opération sensible.
- Limiter l’accès d’un Responsable aux données de son propre département au niveau des requêtes et des contrôleurs.
- Préserver la traçabilité des opérations financières et limiter strictement leur modification ou suppression.
- Ne jamais versionner .env, les mots de passe, les clés ou les données personnelles réelles.
- Avant la mise en production, désactiver le mode debug (APP_DEBUG=false), configurer HTTPS et revoir les paramètres de session, de courriel et de sauvegarde.
Prochaines étapes
1. Finaliser et tester l’authentification avec les pages Login/Register et les contrôleurs associés.
2. Mettre en place l’attribution automatique du rôle visiteur à l’inscription.
3. Créer le premier administrateur de manière sécurisée.
4. Construire les tableaux de bord adaptés aux rôles.
5. Développer progressivement la gestion des utilisateurs, départements, membres, publications et finances.
6. Ajouter les validations, tests automatisés et contrôles d’accès avant le déploiement.
Projet : AppEglise
Établissement : Église Foi Parfaite
Statut : En cours de développement
