import { Component, ChangeDetectorRef } from '@angular/core';
import { Product } from '../../models/product.model';
import { Aiservice } from '../../services/aiservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card-generator',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-card-generator.html',
  styleUrl: './product-card-generator.css',
  standalone: true
})
export class ProductCardGenerator {
  productName = '';
  category = '';
  isLoading = false;
  productData: Product | null = null;
  error = '';

  // was unable to detect changes so used change detector ref
  constructor(private aiService: Aiservice, private cdr: ChangeDetectorRef) { }

  generateProduct() {
    if (!this.productName || !this.category) {
      this.error = '*Please enter product name and category';
      return;
    }

    this.error = '';
    this.isLoading = true;
    this.productData = null;

    this.aiService
      .generateProductDetails(this.productName, this.category)
      .subscribe({
        next: (res) => {
          try {
            const rawText = res.candidates[0].content.parts[0].text;
            if (!rawText) throw new Error("Empty AI response");

            const cleanedText = rawText
              .replace(/```json/g, '')
              .replace(/```/g, '')
              .trim();

            this.productData = JSON.parse(cleanedText);
          } catch (e) {
            console.error('Parsing error:', e);
            this.error = '*Failed to parse AI response';
          } finally {
            this.isLoading = false;
            // force change detection
            this.cdr.detectChanges();
          }
        },
        error: (err) => {
          console.error('API error:', err);
          this.error = '*Something went wrong. Please try again.';
          this.isLoading = false;
          // force change detection
          this.cdr.detectChanges();
        }
      });
  }
}