import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((module) => module.AuthModule) },
    { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then((module) => module.DashboardModule), canActivate: [authGuard] },
    { path: 'client', loadChildren: () => import('./modules/client/client.module').then((module) => module.ClientModule), canActivate: [authGuard] },
    { path: 'product', loadChildren: () => import('./modules/product/product.module').then((module) => module.ProductModule), canActivate: [authGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
