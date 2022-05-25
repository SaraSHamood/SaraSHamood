import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { users } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: HomeService, private route: Router) { }

  ngOnInit(): void {
  }

  public users: users[] = this.service.users;

  public goToUser(user: users):void{
    this.route.navigateByUrl('/user/' + user.name);
  }

}
