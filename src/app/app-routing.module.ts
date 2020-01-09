import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SpeakersComponent } from "./speakers/speakers.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManagementComponent } from "./management/management.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    data: {
      breadcrumb: [
        { name: "Speaker Pool", url: "#", isActive: false },
        { name: "Dashboard", url: "#", isActive: true }
      ]
    } as RouteData
  },
  {
    path: "management",
    component: ManagementComponent,
    data: {
      breadcrumb: [
        { name: "Speaker Pool", url: "#", isActive: false },
        { name: "Management", url: "#", isActive: true }
      ]
    } as RouteData
  },
  {
    path: "speakers",
    component: SpeakersComponent,
    data: {
      breadcrumb: [
        { name: "Speaker Pool", url: "#", isActive: false },
        { name: "Speakers", url: "#", isActive: true }
      ]
    } as RouteData
  },
  {
    path: "**",
    component: DashboardComponent,
    data: {
      breadcrumb: [
        { name: "Speaker Pool", url: "#", isActive: false },
        { name: "Dashboard", url: "#", isActive: true }
      ]
    } as RouteData
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
