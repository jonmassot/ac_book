import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { UserProfile } from 'src/app/models/profile';

export class UserService {
  private _profiles: UserProfile[] = [];

  constructor() {
    this.generateProfiles();
  }

  private generateProfiles(): void {
    for (let i = 0; i < 10; i++) {
      const fullName = faker.person.fullName();
      this._profiles.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        firstName: fullName.split(' ')[0],
        lastName: fullName.split(' ')[1],
        phoneNumber: faker.phone.number(),
        isAdmin: faker.datatype.boolean(),
        address: {
          street: faker.location.street(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipCode: faker.location.zipCode(),
          country: faker.location.country()
        }
      });
    }
  }

  public getUsers(): Observable<UserProfile[]> {
    return of(this._profiles);
  }
}