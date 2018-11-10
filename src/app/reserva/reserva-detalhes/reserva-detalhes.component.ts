import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva-detalhes',
  templateUrl: './reserva-detalhes.component.html',
  styleUrls: ['./reserva-detalhes.component.css']
})
export class ReservaDetalhesComponent implements OnInit {
  public reserva;

  constructor(private reservaService: ReservaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.reservaService.getReserva(params.id).subscribe(data => this.reserva = data);
    });
  }

}
