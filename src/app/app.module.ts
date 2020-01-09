import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SpeakersComponent } from "./speakers/speakers.component";
import { SideMenuComponent } from "./shared/side-menu/side-menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BreadcrumbComponent } from "./shared/breadcrumb/breadcrumb.component";
import { ManagementComponent } from "./management/management.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpeakersComponent,
    SideMenuComponent,
    DashboardComponent,
    BreadcrumbComponent,
    ManagementComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
