import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Perfil',  icon:'pe-7s-user', class: '' },
    { path: '/note', title: 'Notas Técnicas',  icon:'pe-7s-play', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'pe-7s-user', class: '' },
    { path: '/typography', title: 'Gerenciamento Suporte',  icon:'pe-7s-headphones', class: '' },
    // { path: '/upgrade', title: 'v.1.0.0',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
