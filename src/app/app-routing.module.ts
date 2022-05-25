import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { UserComponent } from './user/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m)=> m.HomeModule)
  },
  {
    path: '',
    loadChildren: ()=> import('./welcome/welcome.module').then((m)=> m.WelcomeModule)
  },
  {
    path: 'user/Sara',
    loadChildren: ()=> import('./sara/sara.module').then((m)=>m.SaraModule)
  },
  {
    path: 'user/person',
    loadChildren: ()=> import('./user/user.module').then((m)=>m.UserModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
