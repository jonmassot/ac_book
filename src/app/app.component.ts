import { Component } from '@angular/core';
import { UserService } from './services/user';
import { UserProfile } from './models/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService],
})
export class AppComponent {
  title = 'ac_book';

  constructor(private userService: UserService) {}

  public randomUser: UserProfile | undefined = undefined;

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users: UserProfile[]) => {
        const index = Math.ceil(Math.random() * users.length - 1);

        this.userService.setCurrentUser(users[index]);

        this.randomUser = this.userService.getCurrentUser();
      },
      error: (err) => {
        console.error('Error while fetching a user:', err);
      },
    });
  }
}
