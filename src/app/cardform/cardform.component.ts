import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { DateFormControl } from '../date-form-control';


@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrl: './cardform.component.scss'
})
export class CardformComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    cardNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern('^[0-9]*$')

    ]),
    expirationDate: new DateFormControl(null, [
      Validators.required,
      Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])/)
    ]),
    securityCode: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern('^[0-9]*$')


    ])
    
  }) 

  constructor() {}
  ngOnInit(): void {
    
  }

  resetForm() {
    this.cardForm.reset();
  }

}
