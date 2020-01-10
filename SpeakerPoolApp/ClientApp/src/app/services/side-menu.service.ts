import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  private slideMenu: SideMenu[] = [
    {
      name: 'General',
      sideMenuItem: [
        { name: 'Dashboard', url: '/dashboard' },
        { name: 'Speakers', url: '/speakers' }
      ]
    },
    {
      name: 'Management',
      sideMenuItem: [
        { name: 'Add Speaker', url: '/add-speaker' }
      ]
    }
  ];

  constructor() {}

  public getSideMenu = () => this.slideMenu;
}
