import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { PatientComponent } from './patient/patient.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/management', component: UserComponent, canActivate:[AuthenticationGuard] },
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'side-nav', component: SideNavComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'main', component: MainComponent},
  {path: 'patient', component: PatientComponent },
  {path: 'settings', component: SettingsComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'profil', component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
