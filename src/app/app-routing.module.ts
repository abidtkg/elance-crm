import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((module) => module.AuthModule) },
    { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then((module) => module.DashboardModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
