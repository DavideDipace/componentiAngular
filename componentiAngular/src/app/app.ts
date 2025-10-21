import { Component, signal } from '@angular/core';
import { Esercizio1 } from './esercizio1/esercizio1';
import { Esercizio2 } from './esercizio2/esercizio2';
import { Esercizio3 } from './esercizio3/esercizio3';

@Component({
  selector: 'app-root',
  imports: [Esercizio1, Esercizio2, Esercizio3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('componentiAngular');
}
