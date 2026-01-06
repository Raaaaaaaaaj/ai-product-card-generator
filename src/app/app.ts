import { Component, signal } from '@angular/core';
import { ProductCardGenerator } from './components/product-card-generator/product-card-generator';

@Component({
  selector: 'app-root',
  imports: [ProductCardGenerator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aiProductCardGenerator');
}
