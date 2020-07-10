import { Repositorios } from './../../models/repo.models';
import { User } from './../../models/user.models';
import { GitHubService } from './../../services/github.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public user: User;
  public userRepos: Repositorios[];
  public empty: boolean = true;

  constructor(
    private service: GitHubService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let login = this.route.snapshot.paramMap.get('user');

    this.service.getUser(login)
      .subscribe((user) => {
        this.user = user;
      });

      this.service.getRepos(login)
        .subscribe((repos) => {
          this.userRepos = repos;
          if(repos.length !== 0)
            this.empty = false;
        });
  }

  formatData(date: string) {
    let newDate: string = date.slice(0,10).split('-').reverse().join('/');
    return newDate;
  }

}
