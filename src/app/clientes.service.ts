import { CLIENTES } from './clientes.mock';
import { Injectable } from '@angular/core';
import { Cliente } from './interfaces/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

getClientes():Cliente[]{
  return CLIENTES;
}
}
