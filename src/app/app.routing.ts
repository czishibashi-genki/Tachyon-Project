import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { LoginComponent } from './login/login.component'
import { RequestComponent } from './request/request.component'

const appRoutes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'users/:userId', component:  UserComponent },
  { path: 'requests', component:  RequestComponent },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
