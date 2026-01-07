import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Aiservice {
  private apiUrl =
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

  constructor(private http: HttpClient) { }

  generateProductDetails(productName: string, category: string) {

    const prompt = `
You are an assistant that generates product card content.

Generate:
1. Product title
2. Short description (2 lines)
3. 5 keywords

Product Name: ${productName}
Category: ${category}

Return result strictly in JSON format:
{
  "title": "",
  "description": "",
  "keywords": []
}
    `;

    const body = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    };

    return this.http.post<any>(
      `${this.apiUrl}?key=${environment.geminiApiKey}`,
      body
    );
  }
}
