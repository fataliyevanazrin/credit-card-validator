import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() control! : any;
  @Input() label! : string

  constructor() {}

  ngOnInit(): void {

  }

  showErrors() {
    const {dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }

}
