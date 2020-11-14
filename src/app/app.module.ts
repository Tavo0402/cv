import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { EducationWorkHistoryComponent } from './components/education-work-history/education-work-history.component';
import { ContactComponent } from './components/contact/contact.component';
import { MyServicesComponent } from './components/my-services/my-services.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    InfoBarComponent,
    EducationWorkHistoryComponent,
    ContactComponent,
    MyServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
