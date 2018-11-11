import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuartoComponent } from './quarto.component';

@NgModule({
  declarations: [QuartoComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class QuartoModule { }
