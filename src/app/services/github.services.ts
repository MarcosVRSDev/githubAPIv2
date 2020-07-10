import { Repositorios } from './../models/repo.models';
import { User } from './../models/user.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable ({
  providedIn: 'root'
})

export class GitHubService {

  public api: string = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getUser(user: string) {
    return this.http.get<User>(`${this.api}users/${user}`);
  }

  getUsersList(count: number) {
    return this.http.get<User[]>(`${this.api}users?since=${count}`);
  }

  getRepos(user: string) {
    return this.http.get<Repositorios[]>(`${this.api}users/${user}/repos`);
  }
}