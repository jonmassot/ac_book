import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  icon: string;
  link: string;
}

// TODO: Missing icon in template

@Component({
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
  selector: 'app-menu',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [
    { name: 'Home', icon: 'home', link: '/' },
    { name: 'Users', icon: 'person', link: '/users' },
    { name: 'Book', icon: 'book', link: '/book' },
    { name: 'Booked flight', icon: 'plane', link: '/booked-flight' },
  ];

  closeMenu(): void {
    // TODO: Implement menu close functionality
  }

  selectItem(item: MenuItem): void {
    // TODO: Redirect or use router to navigate to the selected item
  }
}
