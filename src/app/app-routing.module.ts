import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { MySubjectsComponent } from './pages/my-subjects/my-subjects.component';
import { MyMessagesComponent } from './pages/my-messages/my-messages.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistrationComponent } from './pages/registration/registration.component';


const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'student', component: StudentHomeComponent, children: [
    {path: 'add-course', component: AddCourseComponent},
    {path: 'my-subjects', component: MySubjectsComponent},
    {path: 'my-messages', component: MyMessagesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
