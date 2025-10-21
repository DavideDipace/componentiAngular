import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio3',
  imports: [],
  templateUrl: './esercizio3.html',
  styleUrl: './esercizio3.css'
})
export class Esercizio3 {
  studenti = ['Sampietro', 'Sampognaro', 'Sidoti', 'Maldifassi', 'Ahmed'];
  rimuovistudente(index:number){//rimuove un elemento dalla lista
    this.studenti.splice(index, 1)
}
aggiungistudente(nuovo: string) {
    const nome = nuovo.trim();
    if (nome) {
    this.studenti.push(nome);
    }
  }
}