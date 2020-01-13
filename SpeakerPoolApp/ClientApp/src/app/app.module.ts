import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpeakersComponent,
    SideMenuComponent,
    DashboardComponent,
    BreadcrumbComponent,
    AddSpeakerComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
