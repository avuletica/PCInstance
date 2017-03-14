import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from '../../services/auth-guard.service';
import { AuthService }          from '../../services/auth.service';
import { LoginComponent }       from './login/login.component';
import { AdminComponent }       from './admin/admin.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}
