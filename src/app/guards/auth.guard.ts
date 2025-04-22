import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    
    const token = !!localStorage.getItem('elancex');
    if (token) {
        return true;
    } else {
        localStorage.clear();
        router.navigate(['/auth/login']);
        return false;
    }
};
