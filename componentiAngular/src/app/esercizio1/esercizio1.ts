import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio1',
  templateUrl: './esercizio1.component.html',
  styleUrls: ['./esercizio1.component.css']
})
export class Esercizio1 {

  // 1. Definiamo la nostra proprietà booleana
  // Inizialmente impostata a 'true', quindi l'elemento sarà visibile
  elementoVisibile: boolean = true;

  constructor() { }

  // 2. Creiamo un metodo per cambiare il valore della proprietà
  toggleVisibilita(): void {
    // Questo inverte il valore booleano (true -> false, false -> true)
    this.elementoVisibile = !this.elementoVisibile;
  }
}