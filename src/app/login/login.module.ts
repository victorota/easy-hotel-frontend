import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormInputModule } from '../shared/form-input/form-input.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormInputModule
  ]
})
export class LoginModule { }
