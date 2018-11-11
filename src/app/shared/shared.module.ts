import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { ThumbListComponent } from './thumb-list/thumb-list.component';
import { FormInputComponent } from './form-input/form-input.component';
import { NgxMaskModule } from 'ngx-mask';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [ThumbListComponent, FormInputComponent, StarRatingComponent],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule,
  ],
  exports: [ThumbListComponent, FormInputComponent, StarRatingComponent]
})
export class SharedModule { }
