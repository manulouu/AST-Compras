import { Injectable } from '@angular/core';
import { response } from 'express';
import Compra from '../models/compra';
import { WebService } from './webservice.service';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  public rest = true
  public success = false
  public failure = false
  constructor(private webService: WebService) { }

  getCompras() {
    return this.webService.get(`api/compra`);
  }

  getPokemons() {
    return this.webService.getP(`api/pokemon`);
  }

  getCompraByID(_id: string) {
    return this.webService.get(`api/compra/id/${_id}`);
  }

  getCompraByIDCliente(idCliente: string) {
    return this.webService.get(`api/compra/idCliente/${idCliente}`);
  }

  getCompraByIDClienteYNombre(idCliente: string, nombre: string) {
    return this.webService.get(`api/compra/idCliente/${idCliente}/nombre/${nombre}`);
  }

  createCompra(idArticulo: string, idCliente: string, cantidad: number, nombre: string, direccionEnvio: string) {

    return this.webService.post(`api/compra`, { idArticulo, idCliente, cantidad, nombre, direccionEnvio })
  }

  deleteCompra(_id: string) {
    return this.webService.delete(`api/compra/id/${_id}`);
  }

  putCompra(_id: string, idArticulo: string, idCliente: string, cantidad: number, nombre: string, direccionEnvio: string) {
    return this.webService.put(`api/compra/id/${_id}`, { _id, idArticulo, idCliente, cantidad, nombre, direccionEnvio })
  }

  putPokemonCantidad(_id: string, cantidad: number) {
    return this.webService.putP(`api/pokemon/id/${_id}`, { _id, cantidad })
  }
}
