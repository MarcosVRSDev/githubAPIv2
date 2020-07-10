import { User } from './../../models/user.models';
import { GitHubService } from './../../services/github.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usersList: User[] = [];
  public count: number = 1;

  constructor(
    private service: GitHubService
  ) { }

  ngOnInit(): void {

    this.count = Math.floor(Math.random() * 9999);

    this.service.getUsersList(this.count)
      .subscribe((users) => {
        this.usersList = users;
      })
  }

}
