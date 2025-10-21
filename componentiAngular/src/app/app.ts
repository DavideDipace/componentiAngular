import { Component, signal } from '@angular/core';
import { Esercizio1 } from './esercizio1/esercizio1';

@Component({
  selector: 'app-root',
  imports: [Esercizio1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('componentiAngular');
}
