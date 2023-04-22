import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Compra from 'src/app/models/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-show-compra',
  templateUrl: './show-compra.component.html',
  styleUrls: ['./show-compra.component.css']
})
export class ShowCompraComponent implements OnInit {
  compraSeleccionada!: Compra
  showmodifyflag = false
  compras: Compra[] = [];
  url1: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  url2: string = ".png";
  pokemons: any[] = [];

  constructor(private CompraService: CompraService) {

  }
  ngOnInit() {
    this.CompraService.getCompras()
      .subscribe((compras: any) => this.compras = compras);
  }

  @Output() rstatus = new EventEmitter<boolean>();

  deleteCompra(compra: Compra) {
    this.CompraService.deleteCompra(compra._id)
      .subscribe(response => {
        if (response.status == 200) {
          console.log("deleted true")
          this.rstatus.emit(true);
        } else {
          console.log("deleted true")
          this.rstatus.emit(false);
        }
      });
  }

  modify(compra: Compra) {
    this.compraSeleccionada = compra;
    this.showmodifyflag = true;

  }

  modifyCompra(_id: string, idArticulo: string, idCliente: string, cantidad: number, nombre: string, direccionEnvio: string) {
    this.showmodifyflag = false;
    this.CompraService.putCompra(_id, idArticulo, idCliente, cantidad, nombre, direccionEnvio)
      .subscribe(response => {
        if (response.status == 200) {
          console.log("event true")
          this.rstatus.emit(true);
        } else {
          console.log("event true")
          this.rstatus.emit(false);
        }
      });
  }

  cancelmodify() {
    this.showmodifyflag = false;
  }
  getBoolean(value: string) {
    switch (value) {
      case "true":
        return true;
      default:
        return false;
    }

  }
}
