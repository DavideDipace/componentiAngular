import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente1',
  standalone: true, // ✅ deve esserci qui
  imports: [CommonModule],
  templateUrl: './componente1.html', // ✅ nome corretto del file
  styleUrls: ['./componente1.css']   // ✅ proprietà al plurale
})
export class Componente1Component {

  }
