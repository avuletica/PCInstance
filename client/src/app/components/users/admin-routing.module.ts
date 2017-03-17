import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from '../../services/auth-guard.service';
import { AuthService }          from '../../services/auth.service';
import { LoginComponent }       from './login/login.component';
import { AdminComponent }       from './admin/admin.component';
import { ProductDashboardComponent }  from './admin/product-dashboard/product-dashboard.component';
import { UserDashboardComponent }     from './admin/user-dashboard/user-dashboard.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/products', component: ProductDashboardComponent, canActivate: [AuthGuard] }, 
  { path: 'admin/users', component: UserDashboardComponent, canActivate: [AuthGuard] },  
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AdminRoutingModule {}
