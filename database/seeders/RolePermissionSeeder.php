<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $matrix = [
            'pasteur' => [
                'departments.view',
                'members.view',
                'finances.view',
                'finances.reports',
                'publications.view',
                'settings.view',
            ],

            'administrateur' => [
                'users.view',
                'users.create',
                'users.update',
                'roles.view',
                'roles.manage',
                'permissions.manage',
                'departments.view',
                'departments.manage',
                'members.view',
                'members.manage',
                'publications.view',
                'publications.manage',
                'settings.view',
                'settings.manage',
            ],

            'tresorier' => [
                'finances.view',
                'finances.create',
                'finances.update',
                'finances.reports',
            ],

            'responsable-departement' => [
                'departments.view',
                'publications.view',
            ],

            'membre' => [
                'departments.view',
                'publications.view',
            ],

            'visiteur' => [],
        ];

        foreach ($matrix as $roleSlug => $permissionSlugs) {
            $role = DB::table('roles')
                ->where('slug', $roleSlug)
                ->first();

            if (!$role) {
                throw new RuntimeException(
                    "Le rôle '{$roleSlug}' n'existe pas dans la table roles."
                );
            }

            foreach ($permissionSlugs as $permissionSlug) {
                $permission = DB::table('permissions')
                    ->where('slug', $permissionSlug)
                    ->first();

                if (!$permission) {
                    throw new RuntimeException(
                        "La permission '{$permissionSlug}' n'existe pas."
                    );
                }

                DB::table('permission_role')->updateOrInsert(
                    [
                        'role_id' => $role->id,
                        'permission_id' => $permission->id,
                    ],
                    [
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]
                );
            }
        }
    }
}
