import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ControlMessagesModule } from '../../control-messages/control-messages.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [FormInputComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // ControlMessagesModule,
    NgxMaskModule,
    CommonModule
  ],
  exports: [FormInputComponent]
})
export class FormInputModule { }
