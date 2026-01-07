## AI Product Card Generator
A simple Angular-based web application that generates product card content (title, description, and keywords) using AI based on user-provided product details.


## Problem Statement
The goal of this assignment is to demonstrate:
- Clean UI design
- Proper frontend architecture
- Basic AI integration using an external API
- Clear explanation of design and technical decisions

The application allows a user to enter a product name and category, and generates a visually styled product card using AI.


## Tech Stack
- Framework: Angular
- Styling: CSS (Custom, no external UI library)
- Forms: Angular template-driven forms
- AI API: Google Gemini (Generative Language API)


## Application Flow
- User enters Product Name and Category
- Clicks Generate Details
- A loading skeleton is displayed
- Product details are fetched from the AI API
- The AI response is parsed and rendered as a product card


## UI & Design Choices
- Two-panel layout
    - Left: Input form
    - Right: AI-generated product card
- Skeleton loader used to indicate background processing
- Clean, minimal design to keep focus on content
- No external UI libraries used to keep the solution lightweight


## AI Integration Details
- The application uses Google Gemini’s text generation API
- A carefully structured prompt is sent to the AI, requesting:
    - Product title
    - Short description
    - Keywords
- The AI is instructed to return the result in strict JSON format for easy parsing
- The response is sanitized to handle markdown formatting before rendering


## Folder Structure

src/app/
│── components/
│   └── product-card-generator/
│
│── services/
│   └── ai.service.ts
│
│── models/
│   └── product.model.ts


## How to Run the Project
1. Install dependencies
    - npm install
2. Make environment.ts files in the environments folder
3. Add Gemini API key
    - export const environment = {
        production: false,
        geminiApiKey: 'API_KEY_GOES_HERE'
    }
4. Run the application 
    - ng serve


## Conclusion
This project focuses on clarity, clean architecture, and practical AI usage rather than over-engineering. It demonstrates how AI can be effectively integrated into a frontend application to enhance user experience.

