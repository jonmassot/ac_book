import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfile } from '../models/profile';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private randomProfileSubject = new BehaviorSubject<UserProfile | undefined>(
    undefined
  );

  public randomProfile$: Observable<UserProfile | undefined> =
    this.randomProfileSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<UserProfile[]> {
    return this.httpClient.get<UserProfile[]>('/api/users');
  }

  public getCurrentUser(): UserProfile | undefined {
    return this.randomProfileSubject.getValue();
  }

  public setCurrentUser(user: UserProfile): void {
    this.randomProfileSubject.next(user);
  }
}
