import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ThumbListModule } from '../shared/thumb-list/thumb-list.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ThumbListModule
  ]
})
export class HomeModule { }
