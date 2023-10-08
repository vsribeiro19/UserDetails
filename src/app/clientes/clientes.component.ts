import { ClientesService } from './../clientes.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { CLIENTES } from '../clientes.mock';
import { Cliente } from '../interfaces/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  panelOpenState = false;
  clientes: Cliente[] = [];
  constructor(private clienteService: ClientesService) {
  }

  getClientes():void{
    this.clientes = this.clienteService.getClientes();
  }

  ngOnInit(): void {
    this.getClientes();
  }

}
