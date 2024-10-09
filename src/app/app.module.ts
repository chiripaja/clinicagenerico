import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AdmisionComponent } from './clinica/admision/admision.component';
import { DashboardComponent } from './clinica/dashboard/dashboard.component';
import { CitasComponent } from './clinica/citas/citas.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AdminNavComponent } from './layout/admin-nav/admin-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FechaComponent } from './components/fecha/fecha.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmisionComponent,
    DashboardComponent,
    CitasComponent,
    AdminComponent,
    AdminNavComponent,
    FechaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
