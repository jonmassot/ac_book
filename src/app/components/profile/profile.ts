import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/models/profile';
import { UserService } from 'src/app/services/user';

@Component({
  templateUrl: './profile.html',
  selector: 'app-profile',
})
export class ProfileComponent {
  public email: string = '';
  public profile: UserProfile | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email') ?? '';
    this.userService.getUsers().subscribe({
      next: (users: UserProfile[]) => {
        /* Because the user data is randomize everytime the code is compiled, a user must return on the users table to get the data
        of the new users base.*/
        this.profile = users.find((user) => user.email === this.email);
      },
      error: (err) => {
        console.error('Error finding the user:', err);
      },
    });
  }
}
