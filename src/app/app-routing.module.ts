import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './components/guards/login.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').
    then(mod => mod.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').
    then(mod => mod.HomeModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'plates/detailMeal',
    loadChildren: () => import('./components/home/home.module').
    then(mod => mod.HomeModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./components/ingredients/ingredients.module').
    then(mod => mod.IngredientsModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'plates',
    loadChildren: () => import('./components/plates/plates.module').
    then(mod => mod.PlatesModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').
    then(mod => mod.ProfileModule),
    canActivate: [LoginGuard]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
