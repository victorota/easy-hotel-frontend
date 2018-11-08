import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ReservaModule } from './reserva/reserva.module';
import { HotelModule } from './hotel/hotel.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    HomeModule,
    FooterModule,
    ReservaModule,
    HotelModule,
    CadastroModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
