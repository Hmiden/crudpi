import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

import { GuideComponent } from '../frontend/pages/guide/guide.component';
import { AddUserComponent } from './pages/adduser/adduser.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { BackComponent } from './pages/back/back.component';

import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { DetailsbackguideComponent } from './pages/detailsbackguide/detailsbackguide.component';
import { AddplanningComponent } from './pages/addplanning/addplanning.component';
import { AuthGuard } from '../auth.guard';
import { ListeguideComponent } from './pages/listeguide/listeguide.component';
import { AddguideComponent } from './pages/addguide/addguide.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Chart } from 'chart.js';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

import { AfficherplanningComponent } from './pages/afficherplanning/afficherplanning.component';
import { EditguideComponent } from './pages/editguide/editguide.component';
import { GastronomyComponent } from './pages/gastronomy/gastronomy.component';
import { MenusComponent } from './pages/menus/menus.component';
import { GastronomyStatsComponent } from './pages/statistics/gastronomy-stats/gastronomy-stats.component';
import { DashboardPartnerComponent } from './pages/dashboard-partner/dashboard-partner.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'editguide/:id', component: EditguideComponent },
      { path: 'detailsbackguide/:id', component: DetailsbackguideComponent },
      { path: 'addplanning', component: AddplanningComponent },
      { path: 'afficherplanning', component: AddplanningComponent },
      { path: 'menu', component: MenusComponent },
      { path: 'back', component: BackComponent },
      { path: 'listeguide', component: ListeguideComponent },
      { path: 'addguide', component: AddguideComponent },
      { path: 'adduser', component: AddUserComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'edit-user/:id', component: EditUserComponent },
      { path: 'guide', component: GuideComponent }
    ]
  },
  {
    path: 'partnerdashboard',
    component: DashboardPartnerComponent,
    children: [
      { path: 'gastronomy', component: GastronomyComponent },
      { path: 'gastronomy-stats', component: GastronomyStatsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    EditguideComponent,
    DashboardComponent,
    AddUserComponent,
    UserListComponent,
    EditUserComponent,
    DetailsbackguideComponent,
    AddplanningComponent,
    AddguideComponent,
    ListeguideComponent,
    BackComponent,
    MenusComponent,
    GastronomyComponent,
    GastronomyStatsComponent,
    DashboardPartnerComponent
  ],
  imports: [
    FullCalendarModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule
  ],
  exports: [RouterModule]
})
export class BackendModule {}
