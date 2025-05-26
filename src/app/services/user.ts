import { Observable } from "rxjs";
import { UserProfile } from "../models/profile";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<UserProfile[]> {
    return this.httpClient.get<UserProfile[]>('/api/users');
  }
}