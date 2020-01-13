import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakersComponent } from './speakers/speakers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: [
        { name: 'General', url: '#', isActive: false },
        { name: 'Dashboard', url: '#', isActive: true }
      ]
    } as RouteData
  },
  {
    path: 'speakers',
    component: SpeakersComponent,
    data: {
      breadcrumb: [
        { name: 'General', url: '#', isActive: false },
        { name: 'Speakers', url: '#', isActive: true }
      ]
    } as RouteData
  },
  {
    path: 'add-speaker',
    component: AddSpeakerComponent,
    data: {
      breadcrumb: [
        { name: 'Management', url: '#', isActive: false },
        { name: 'Add Speaker', url: '#', isActive: true }
      ]
    } as RouteData
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
