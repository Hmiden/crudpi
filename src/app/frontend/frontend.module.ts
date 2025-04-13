import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OffersComponent } from './pages/offers/offers.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/interceptors/jwt.interceptor';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AfficherplanningComponent } from './pages/afficherplanning/afficherplanning.component';
import { ReservationGuideComponent } from './pages/reservationguide/reservationguide.component';
import { DetailsreservationComponent } from './pages/detailsreservation/detailsreservation.component';
import { GuideComponent } from './pages/guide/guide.component';
import { ListGReservationComponent } from './pages/list-greservation/list-greservation.component';
import { EditreservationComponent } from './pages/editreservation/editreservation.component';
import { ListereservationsComponent } from './pages/accessGuide/listereservations/listereservations.component';
const routes: Routes = [
  
  
  {
    path: '', component: HomeComponent, // Layout parent
    children: [
      
      { path: 'guide', component: GuideComponent },
      {path: 'guidedetails/:id', component: GuideComponent ,children: [      {path: 'afficherplanning', component: AfficherplanningComponent },
      ]},

      { path: 'resguide', component:ReservationGuideComponent },
      { path: 'reservationguidedetails/:id', component:DetailsreservationComponent },

      { path: 'listereservationsguide', component:ListGReservationComponent },
      { path: 'editreservation/:id', component:EditreservationComponent },
      { path: 'reservationsbyguide', component: ListereservationsComponent},

    ]
  },

  { path: 'about', component: AboutComponent } ,
 { path: 'offers', component: OffersComponent},
 { path: 'news', component: NewsComponent},
 { path: 'login', component: LoginComponent},

 { path: 'register', component: RegisterComponent},

  { path: 'contact', component: ContactComponent},
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'blog', component: BlogComponent },


  // À propos
];

@NgModule({
  declarations: [
    ListereservationsComponent,
    ListGReservationComponent,
    DetailsreservationComponent,
    EditreservationComponent,
    AfficherplanningComponent,
    EditreservationComponent,
    RegisterComponent,
    ResetPasswordComponent, 
    ForgotPasswordComponent,
    HomeComponent,
    AboutComponent,
    OffersComponent,
    NewsComponent,
    ContactComponent,
    GuideComponent,
    LoginComponent,
    BlogComponent,
    DetailsreservationComponent,
    BlogComponent,
    ReservationGuideComponent,
    BlogComponent,
    AfficherplanningComponent,
    BlogComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule ,
    ReactiveFormsModule,
   // Enregistrer les routes pour le frontend
  ],
 /*  providers: [ {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],*/
})
export class FrontendModule { }
