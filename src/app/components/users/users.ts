import { Component } from '@angular/core';
import { UserService } from '../../services/user';
import { UserProfile } from 'src/app/models/profile';

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
  styleUrls: ['./users.scss']
})
export class UsersComponent {
  private _users: UserProfile[] = [];

  public displayedColumns: string[] = ['username', 'email', 'firstName', 'lastName', 'actions'];

  get users(): UserProfile[] {
    return this._users;
  }

  constructor(private usersService: UserService) {
    this.usersService.getUsers().subscribe({
      next: (users: UserProfile[]) => {
        this._users = users;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  public delete(id: number): void { }

  public edit(id: number): void { }
}
