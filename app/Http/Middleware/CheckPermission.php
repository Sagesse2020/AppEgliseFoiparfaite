<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckPermission
{
    public function handle(
        Request $request,
        Closure $next,
        string $permission
    ): Response {
        $user = $request->user();

        // Un utilisateur non connecté ne peut pas continuer.
        if (!$user) {
            abort(401, 'Vous devez être connecté pour accéder à cette page.');
        }

        // Vérifier la permission requise.
        if (!$user->hasPermission($permission)) {
            abort(403, 'Vous ne disposez pas des droits nécessaires.');
        }

        return $next($request);
    }
}
