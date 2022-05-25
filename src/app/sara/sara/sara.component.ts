import { HomeService } from '../../home/home.service';
import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/home/home.service';

@Component({
  selector: 'app-sara',
  templateUrl: './sara.component.html',
  styleUrls: ['./sara.component.scss']
})
export class SaraComponent implements OnInit {

  constructor(private service: HomeService) { }

  ngOnInit(): void {
  }

  public user: users = this.service.users[0];
}
