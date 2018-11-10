import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaDetalhesComponent } from './reserva-detalhes.component';

describe('ReservaDetalhesComponent', () => {
  let component: ReservaDetalhesComponent;
  let fixture: ComponentFixture<ReservaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
