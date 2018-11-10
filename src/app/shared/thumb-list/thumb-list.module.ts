import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbListComponent } from './thumb-list.component';
import { RatingModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [ThumbListComponent],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    RouterModule
  ],
  exports: [ThumbListComponent]
})
export class ThumbListModule { }
