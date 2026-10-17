<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            // Utilisateurs
            ['name' => 'Consulter les utilisateurs', 'slug' => 'users.view'],
            ['name' => 'Créer des utilisateurs', 'slug' => 'users.create'],
            ['name' => 'Modifier les utilisateurs', 'slug' => 'users.update'],
            ['name' => 'Supprimer des utilisateurs', 'slug' => 'users.delete'],

            // Rôles et permissions
            ['name' => 'Consulter les rôles', 'slug' => 'roles.view'],
            ['name' => 'Gérer les rôles', 'slug' => 'roles.manage'],
            ['name' => 'Gérer les permissions', 'slug' => 'permissions.manage'],

            // Départements
            ['name' => 'Consulter les départements', 'slug' => 'departments.view'],
            ['name' => 'Gérer les départements', 'slug' => 'departments.manage'],

            // Membres
            ['name' => 'Consulter les membres', 'slug' => 'members.view'],
            ['name' => 'Gérer les membres', 'slug' => 'members.manage'],

            // Finances
            ['name' => 'Consulter les finances', 'slug' => 'finances.view'],
            ['name' => 'Enregistrer les opérations financières', 'slug' => 'finances.create'],
            ['name' => 'Modifier les opérations financières', 'slug' => 'finances.update'],
            ['name' => 'Supprimer les opérations financières', 'slug' => 'finances.delete'],
            ['name' => 'Consulter les rapports financiers', 'slug' => 'finances.reports'],

            // Publications
            ['name' => 'Consulter les publications', 'slug' => 'publications.view'],
            ['name' => 'Gérer les publications', 'slug' => 'publications.manage'],

            // Paramètres
            ['name' => 'Consulter les paramètres', 'slug' => 'settings.view'],
            ['name' => 'Modifier les paramètres', 'slug' => 'settings.manage'],
        ];

        foreach ($permissions as $permission) {
            DB::table('permissions')->updateOrInsert(
                ['slug' => $permission['slug']],
                [
                    'name' => $permission['name'],
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }
    }
}
