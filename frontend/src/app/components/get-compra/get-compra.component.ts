import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Compra from 'src/app/models/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-get-compra',
  templateUrl: './get-compra.component.html',
  styleUrls: ['./get-compra.component.css']
})

export class GetCompraComponent implements OnInit {

  showresults = false
  showformflag = false
  compras: Compra[] = [];
  comprasolo!: Compra
  compraSeleccionada!: Compra
  showmodifyflag = false
  url1: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  url2: string = ".png";
  constructor(private CompraService: CompraService) {

  }
  ngOnInit(): void {
    this.compras=[]
    this.showresults = false
  }

  // getByName(name: string) {
  //   this.pokemons=[]
  //   this.showformflag = false;
  //   this.showresults = true;
  //   this.PokemonService.getPokemonByName(name).subscribe((response: any) => {
  //     if (Array.isArray(response)) {
  //       this.pokemons = response; // La respuesta es un arreglo de Pokemon
  //     } else {
  //       this.pokemons = [response]; // La respuesta es un solo Pokemon
  //     }
  //   });
  // }

  // getByType(type: string) {
  //   this.compras=[]
  //   this.showformflag = false;
  //   this.showresults = true;
  //   this.PokemonService.getPokemonByType(type).subscribe((response: any) => {
  //     if (Array.isArray(response)) {
  //       this.pokemons = response; // La respuesta es un arreglo de Pokemon
  //     } else {
  //       this.pokemons = [response]; // La respuesta es un solo Pokemon
  //     }
  //   });
  // } 

  getByID(id: string) {
    this.compras=[]
    this.showformflag = false;
    this.showresults = true;
    this.CompraService.getCompraByID(id).subscribe((response: any) => {
      this.compras = [response];
    });
  }

  getByIDCliente(idCliente: string) {
    this.compras=[]
    this.showformflag = false;
    this.showresults = true;
    console.log(this.compras);
    this.CompraService.getCompraByIDCliente(idCliente).subscribe((response: any) => {
      if (Array.isArray(response)) {
        this.compras = response; // La respuesta es un arreglo de Pokemon
      } else {
        this.compras = [response]; // La respuesta es un solo Pokemon
      }
    });
  }

  getByIDClienteYNombre(idCliente: string, nombre: string) {
    this.compras=[]
    this.showformflag = false;
    this.showresults = true;
    console.log(this.compras);
    this.CompraService.getCompraByIDClienteYNombre(idCliente,nombre).subscribe((response: any) => {
      if (Array.isArray(response)) {
        this.compras = response; // La respuesta es un arreglo de Pokemon
      } else {
        this.compras = [response]; // La respuesta es un solo Pokemon
      }
    });
  }


  showform() {
    this.compras=[]//testearlo
    if (this.showformflag == false) {
      this.showresults = false
      this.showformflag = true;
    } else this.showformflag = false
  }

  @Output() rstatus = new EventEmitter<boolean>();

  deleteCompra(compra: Compra) {
    this.showresults = false
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
    this.showresults = false

  }


  modifyCompra(_id: string, idArticulo: string, idCliente: string, cantidad: number, nombre: string, direccionEnvio: string) {
    this.showmodifyflag = false;
    this.showresults = false
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
