import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  public users : users[] = [{
    name: 'Sara',
    age: 23,
    picture: '../../assets/sara.jpg'
  },
{
  name: 'person',
  age: 50,
  picture: '../../assets/sd.png'
}]
}

export interface users {
  name: string;
  age: number;
  picture: string;
}
