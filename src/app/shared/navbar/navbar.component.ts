import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isOpenNavbarMenu: boolean = false;

  constructor() {}

  ngOnInit() {}

  public openNavbarMenu() {
    this.isOpenNavbarMenu = !this.isOpenNavbarMenu;
  }
}
