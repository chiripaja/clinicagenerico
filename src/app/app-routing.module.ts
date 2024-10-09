import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AdmisionComponent } from './clinica/admision/admision.component';
import { CitasComponent } from './clinica/citas/citas.component';
import { DashboardComponent } from './clinica/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent,
    children:[
      { path: '', redirectTo: 'admision', pathMatch: 'full' },
      { path: 'admision', component: AdmisionComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
