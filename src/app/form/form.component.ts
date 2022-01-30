import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  user: User = new User(1, null, null, null) 
  roles: string[] = ['Гость', 'Модератор', 'Администратор']

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
console.log('form submitted')
  }

}
