import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { NotificationService } from './service/notification.service';
import { NotificationModule } from './notification.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { PatientComponent } from './patient/patient.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    SideNavComponent,
    HeaderComponent,
    MainComponent,
    PatientComponent,
    SettingsComponent,
    LogoutComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotificationModule,

  ],
  providers: [AuthenticationService , UserService , NotificationService,AuthenticationGuard,
    { provide :HTTP_INTERCEPTORS , useClass : AuthInterceptor , multi :true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
