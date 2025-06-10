import { Component } from '@angular/core';
import { UserService } from '../../services/user';
import { UserProfile } from 'src/app/models/profile';
import { Router } from '@angular/router';

// TODO: missing functionalities:
// - Add user
// - Edit user
// - Delete user
// - Search user
// - Pagination
// - Error handling

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
})
export class UsersComponent {
  private _users: UserProfile[] = [];
  public _user: UserProfile | undefined = this.usersService.getCurrentUser();

  public displayedColumns: string[] = [
    'username',
    'email',
    'firstName',
    'lastName',
    'actions',
  ];

  public userSearch: string = '';

  get users(): UserProfile[] {
    const search = this.userSearch.toLowerCase();

    return this._users.filter((user) =>
      [user.username, user.firstName, user.lastName].some((value) =>
        value.toLowerCase().includes(search)
      )
    );
  }

  constructor(private usersService: UserService, private router: Router) {
    this.usersService.getUsers().subscribe({
      next: (users: UserProfile[]) => {
        this._users = users;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }

  public handleClearFilter(): void {
    this.userSearch = '';
  }

  public delete(email: string): void {
    this._users = this._users.filter((user) => user.email !== email);
  }

  public edit(email: string): void {
    this.router.navigate(['/profile', email]);
  }
}
