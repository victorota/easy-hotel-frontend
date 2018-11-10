import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaDetalhesComponent } from './reserva-detalhes/reserva-detalhes.component';
import { ReservaListaComponent } from './reserva-lista/reserva-lista.component';

@NgModule({
  declarations: [ReservaDetalhesComponent, ReservaListaComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ReservaModule { }
