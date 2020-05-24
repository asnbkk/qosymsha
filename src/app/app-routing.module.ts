import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { MySubjectsComponent } from './pages/my-subjects/my-subjects.component';
import { MyMessagesComponent } from './pages/my-messages/my-messages.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MySettingsComponent } from './pages/my-settings/my-settings.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { SettingsPublicComponent } from './pages/settings-public/settings-public.component';
import { SettingsPersonalComponent } from './pages/settings-personal/settings-personal.component';


const routes: Routes = [
  // {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: '', component: LandingComponent, children: [
  ]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'student', component: StudentHomeComponent, canActivate: [AuthGuardService], children: [
    {path: 'add-course', component: AddCourseComponent},
    {path: 'my-subjects', component: MySubjectsComponent},
    {path: 'my-messages', component: MyMessagesComponent},
    {path: 'my-settings', component: MySettingsComponent , children: [
      {path: 'public', component: SettingsPublicComponent},
      {path: 'personal', component: SettingsPersonalComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
