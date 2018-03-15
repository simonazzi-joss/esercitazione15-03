import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyServiceService } from './services/my-service.service';
import { BodyComponent } from './body/body.component';
import { MessaggiService } from './services/messaggi.service';
import { ComunicatorService } from './services/comunicator.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContextService } from './services/context.service';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MyServiceService,
    MessaggiService,
    ComunicatorService,
    ContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
