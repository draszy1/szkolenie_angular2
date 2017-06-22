import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
