import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((module) => module.AuthModule) },
    { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then((module) => module.DashboardModule), canActivate: [authGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
