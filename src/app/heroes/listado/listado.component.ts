import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor','Dr. Strange'];
  heroeDrop:string = '';


  borrarHeroe(){
    console.log("Borrando...")
    const borrado:string = this.heroes.shift() || ''
    // this.heroes.splice(this.heroes.length-1,1)

    this.heroeDrop = borrado
  }

}
