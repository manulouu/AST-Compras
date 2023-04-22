import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Compra from 'src/app/models/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.css']
})
export class ShowPokemonComponent implements OnInit {
  compraSeleccionada!: Compra
  showmodifyflag = false
  showformflag = false
  showresults = false
  compras: Compra[] = [];
  pokemons: any[] = [];
  url1: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  url2: string = ".png";
  idPokemon: any;
  cantidadPokemon: any;
  numero: any;
  generacion: any;
  region: any;
  tipo: any;
  evolucion: any;
  legendario: any;
  precio: any;

  constructor(private CompraService: CompraService) {

  }
  ngOnInit() {
    this.CompraService.getPokemons()
      .subscribe((pokemons: any) => this.pokemons = pokemons);

  }

  @Output() rstatus = new EventEmitter<boolean>();

  showform(idPokemon: any, cantidadPokemon: any) {
    this.idPokemon = idPokemon;
    this.cantidadPokemon = cantidadPokemon;
    this.pokemons=[]//testearlo
    if (this.showformflag == false) {
      this.showresults = false
      this.showformflag = true;
    } else this.showformflag = false
  }

  cancelform() {
    this.showformflag = false;
  }
  addCompra(idArticulo: string, idCliente: string, cantidad: number, nombre: string, direccionEnvio: string) {
    this.showformflag = false;
    if (cantidad > this.cantidadPokemon || cantidad < 0 || cantidad == null) {
      console.log("compra imposible")
      this.rstatus.emit(false);
    } else {
      this.cantidadPokemon = this.cantidadPokemon - cantidad;
      console.log(this.cantidadPokemon);
      this.CompraService.putPokemonCantidad(this.idPokemon, this.cantidadPokemon);
      this.CompraService.createCompra(idArticulo, idCliente, cantidad, nombre, direccionEnvio)
      .subscribe(response => {
        if (response.status == 200) {
          console.log("dadded true")
          this.rstatus.emit(true);
        } else {
          console.log("added true")
          this.rstatus.emit(false);
        }
      });
    }
  }
}