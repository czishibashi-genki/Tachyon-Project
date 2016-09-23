import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { UserComponent } from './components/user/user.component'
import { RequestComponent } from './components/request/request.component'

const appRoutes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'users/:userId', component:  UserComponent },
  { path: 'requests', component:  RequestComponent },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
