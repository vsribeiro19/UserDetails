import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesClientesComponent } from './detalhes-clientes.component';

describe('DetalhesClientesComponent', () => {
  let component: DetalhesClientesComponent;
  let fixture: ComponentFixture<DetalhesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
