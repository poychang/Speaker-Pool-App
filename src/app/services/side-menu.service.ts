import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SideMenuService {
  private slideMenuList: SideMenuItem[] = [
    { name: "Dashboard", url: "/dashboard", isActive: true } as SideMenuItem,
    { name: "Speakers", url: "/speakers", isActive: false } as SideMenuItem,
    { name: "Management", url: "/management", isActive: false } as SideMenuItem
  ];

  constructor() {}

  public getSideMenu = () => this.slideMenuList;

  public setSideMenu = (slideMenuItem: SideMenuItem) => {
    let target = this.slideMenuList.find(m => m.name == slideMenuItem.name);
    if (target) {
      this.slideMenuList.map(m => (m.isActive = false));
      target.isActive = true;
    }
  };
}
