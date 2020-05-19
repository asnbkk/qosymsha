import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SvgComponent } from './components/svg/svg.component';
import { SearchComponent } from './components/search/search.component';
import { PersonalButtonComponent } from './components/personal-button/personal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgComponent,
    SearchComponent,
    PersonalButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
