import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esercizio1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esercizio1.html'
})

export class Esercizio1 {
 messaggiobool = true;
  mostramessaggio(){
    this.messaggiobool = !this.messaggiobool;
  }
}