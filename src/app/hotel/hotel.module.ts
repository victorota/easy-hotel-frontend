import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel.component';
import { RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [HotelComponent],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM',
    })
  ]
})
export class HotelModule { }
