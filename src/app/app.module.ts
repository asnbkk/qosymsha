import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SvgComponent } from './components/svg/svg.component';
import { SearchComponent } from './components/search/search.component';
import { PersonalButtonComponent } from './components/personal-button/personal-button.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { MySubjectsComponent } from './pages/my-subjects/my-subjects.component';
import { MyMessagesComponent } from './pages/my-messages/my-messages.component';
import { TextComponent } from './components/text/text.component';
import { UniversityCardComponent } from './components/university-card/university-card.component';
import { FormsModule } from '@angular/forms'
import { CardComponent } from './components/card/card.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ButtonComponent } from './components/button/button.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MySettingsComponent } from './pages/my-settings/my-settings.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsPublicComponent } from './pages/settings-public/settings-public.component';
import { SettingsSidebarComponent } from './components/settings-sidebar/settings-sidebar.component';
import { SettingsPersonalComponent } from './pages/settings-personal/settings-personal.component';
import { SettingsPasswordComponent } from './pages/settings-password/settings-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { TutorCardComponent } from './components/tutor-card/tutor-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgComponent,
    SearchComponent,
    PersonalButtonComponent,
    StudentHomeComponent,
    SidebarComponent,
    AddCourseComponent,
    MySubjectsComponent,
    MyMessagesComponent,
    TextComponent,
    UniversityCardComponent,
    CardComponent,
    LandingComponent,
    ButtonComponent,
    RegistrationComponent,
    MySettingsComponent,
    LoginComponent,
    SettingsPublicComponent,
    SettingsSidebarComponent,
    SettingsPersonalComponent,
    SettingsPasswordComponent,
    TutorCardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
