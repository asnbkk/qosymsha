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
import { from } from 'rxjs';
import { CardComponent } from './components/card/card.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ButtonComponent } from './components/button/button.component';
import { RegistrationComponent } from './pages/registration/registration.component';

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
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
