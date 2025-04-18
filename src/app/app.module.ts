import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontendModule } from './frontend/frontend.module';  // Import du module FrontendModule
import { HttpClientModule } from '@angular/common/http';
import { BackendModule } from './backend/backend.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ajout du ReactiveFormsModule
import { RecaptchaModule } from 'ng-recaptcha'; // Importation du module reCAPTCHA


@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, // Routes principales de l'application
    FrontendModule, // Importation du module Frontend
    BackendModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule, // Importation du module reCAPTCHA
    
    // Importation du module Frontend
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }


