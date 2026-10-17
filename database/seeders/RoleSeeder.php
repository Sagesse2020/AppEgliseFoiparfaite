<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Pasteur',
                'slug' => 'pasteur',
                'description' => 'Supervision spirituelle et consultation globale.',
            ],
            [
                'name' => 'Administrateur',
                'slug' => 'administrateur',
                'description' => 'Administration technique et gestion des accès autorisés.',
            ],
            [
                'name' => 'Trésorier',
                'slug' => 'tresorier',
                'description' => 'Gestion financière et rapports de trésorerie.',
            ],
            [
                'name' => 'Responsable de département',
                'slug' => 'responsable-departement',
                'description' => 'Suivi et gestion du département auquel il est affecté.',
            ],
            [
                'name' => 'Membre',
                'slug' => 'membre',
                'description' => 'Accès aux fonctionnalités réservées aux membres.',
            ],
            [
                'name' => 'Visiteur',
                'slug' => 'visiteur',
                'description' => 'Accès limité aux fonctionnalités de consultation.',
            ],
        ];

        foreach ($roles as $role) {
            DB::table('roles')->updateOrInsert(
                ['slug' => $role['slug']],
                [
                    'name' => $role['name'],
                    'description' => $role['description'],
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }
    }
}
