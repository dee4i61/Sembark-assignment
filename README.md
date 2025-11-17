📦 Sembark Frontend Assignment – E-Commerce Application

A fully responsive E-Commerce web application built using
React, TypeScript, Vite, Tailwind CSS, React Router, Context API, and Cypress E2E Testing.
Product data is fetched dynamically from FakeStoreAPI.


🛠️ Installation & Setup

Follow the steps below to run this project locally.

1️⃣ Clone the repository
git clone https://github.com/dee4i61/Sembark-assignment.git
cd sembark-assignment

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


Your app will run on:

👉 http://localhost:5173

🧪 Running Cypress E2E Tests
Step 1 — Start the dev server
npm run dev

Step 2 — Open Cypress
npm run cypress:open

Step 3 — In Cypress UI

Select E2E Testing

Choose a browser (Chrome recommended)

Run this file:

cypress/e2e/basic.cy.ts

Step 4 — Cypress will test:

✔ Home page load
✔ Product rendering
✔ Product detail navigation
✔ Cart page access

🌐 API Used

All data comes from:

👉 https://fakestoreapi.com/

Categories & products are fetched dynamically.
