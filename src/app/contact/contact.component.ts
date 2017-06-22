import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ma-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    message: ''
  };

  showErrors(inputRef: FormControl): boolean {
    return inputRef.dirty && inputRef.invalid;
  }

}
