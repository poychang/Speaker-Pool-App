import { Component, OnInit } from "@angular/core";
import { SideMenuService } from "src/app/services/side-menu.service";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit {
  slideMenuList: SideMenuItem[];

  constructor(private sideMenuService: SideMenuService) {}

  ngOnInit() {
    this.slideMenuList = this.sideMenuService.getSideMenu();
  }

  public clickMenuItem = (slideMenuItem: SideMenuItem) => {
    this.sideMenuService.setSideMenu(slideMenuItem)
  };
}
