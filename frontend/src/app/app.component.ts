import { Component } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showmessage = false;
  success = false
  failure = false
  title = 'frontend';
  showCompraVisible = false

  constructor(private CompraService: CompraService) {

  }


  onrstatus(success: boolean) {
    this.showmessage = true;
    this.success = success;
    this.failure = !success;
  }

  cancelmessage() {

    this.success = false;
    this.failure = false;
    this.showmessage = false;
    this.showCompraVisible = false

  }
  activarShowCompras() {
    if (this.showCompraVisible == false) {
      this.showCompraVisible = true
    } else this.showCompraVisible = false;
  }

  desactivarMostrar(){
    this.showCompraVisible=false;
  }

}