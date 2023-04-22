import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { GetCompraComponent } from './get-compra/get-compra.component';
import { ShowCompraComponent } from './show-compra/show-compra.component';
import { ShowPokemonComponent } from './show-pokemon/show-pokemon.component';


@NgModule({
  declarations: [
    NavbarComponent,
    GetCompraComponent,
    ShowCompraComponent,
    ShowPokemonComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    ShowCompraComponent,
    GetCompraComponent,
    ShowPokemonComponent
  ]
})
export class ComponentsModule { }
