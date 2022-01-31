import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.userForm.invalid);
    console.log(this.userForm.value);
  }
}

// export class FormComponent implements OnInit, AfterViewInit {
//   user: User = new User(1, null, null, null);
//   roles: string[] = ['Гость', 'Модератор', 'Администратор'];

//   formErrors: any = {
//     name: '',
//     age: '',
//   };

//   validetionMessages: any = {
//     name: {
//       required: 'Имя обязательно',
//       minlength: 'Имя должно содержать минимум 4 символа',
//     },

//     age: {
//       required: 'Возраст обязателен',
//     },
//   };

//   @ViewChild('userForm') userForm!: NgForm;

//   constructor() {}

//   ngOnInit(): void {}

//   ngAfterViewInit(): void {
//     this.userForm.valueChanges?.subscribe(() => this.onValueChanged());
//   }

//   onValueChanged(): void {
//     const form = this.userForm.form;

//     Object.keys(this.formErrors).forEach((field) => {
//       this.formErrors[field] = '';

//       const control = form.get(field);

//       if (control && control.dirty && control.invalid) {
//         const messages = this.validetionMessages[field];

//         Object.keys(control.errors as ValidationErrors).forEach((key) => {
//           this.formErrors[field] = messages[key];
//         });
//       }
//     });
//   }

//   onSubmit(): void {
//     console.log('form submitted');
//   }
// }
