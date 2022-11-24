import { Component, OnInit, EventEmitter } from '@angular/core';
import { IPersonaje } from "../interfaces/dbz.interface";
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: IPersonaje = {
    nombre:'Maestro Roshi',
    poder: 500
  }

  constructor(private dbzService:DbzService){}

}
