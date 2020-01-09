import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-management",
  templateUrl: "./management.component.html",
  styleUrls: ["./management.component.scss"]
})
export class ManagementComponent implements OnInit {
  breadcrumb: Breadcrumb[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: RouteData) => {
      this.breadcrumb = data.breadcrumb;
    });
  }
}
