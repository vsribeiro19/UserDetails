import { Component, Input } from '@angular/core';
import { Cliente } from '../interfaces/cliente.model';
import { CLIENTES } from '../clientes.mock';

@Component({
  selector: 'app-detalhes-clientes',
  templateUrl: './detalhes-clientes.component.html',
  styleUrls: ['./detalhes-clientes.component.css']
})
export class DetalhesClientesComponent {
@Input() cliente: Cliente | undefined;

clientes = CLIENTES;

}
