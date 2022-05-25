import { Component, OnInit } from '@angular/core';
import { HomeService, users } from 'src/app/home/home.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private service: HomeService) { }

  ngOnInit(): void {
  }

  public user: users = this.service.users[1];
}
