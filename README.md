# LILIANDO E-Commerce Store

## Overview
LILIANDO is a fully responsive and dynamic e-commerce web application built as part of the Full-Stack Bootcamp at ReDI School (Spring 2025). It was developed by Lilian Rodrigues and showcases ethical fashion inspired by punk rock and streetwear culture.

The project is a modern React/Vite application featuring dynamic product rendering, category filters, localStorage-based cart state, and a smooth user experience using Tailwind CSS.

---

## Features

### Users can:
- View products organized by category: Accessories, Clothing, and Shoes
- Search for products by name or brand
- Filter products by brand or category
- View individual product pages with image galleries
- Add items to cart, update quantities, and remove items
- Proceed to a styled checkout form (demo only)
- See a modal confirmation after 'placing' an order
- Experience persistent cart data via localStorage

---

## Folder Structuree-commerce_LILIANDO-app/

├── public/                   # Static assets
├── src/
│   ├── components/           # Reusable UI components (Navbar, ProductCard, Modal, etc.)
│   ├── context/              # Global state management (if used)
│   ├── data/                 # Static product data (products.js)
│   ├── images/               # All product and branding images
│   ├── pages/                # Main page components (Home, Products, ProductPage, etc.)
│   ├── services/             # Optional API calls or utility functions
│   ├── App.jsx               # Root component with route setup
│   ├── index.css             # Global styling
│   └── main.jsx              # App entry point for Vite
├── .prettierrc               # Prettier configuration
├── .prettierignore           # Prettier ignore rules
├── index.html                # Base HTML file
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Dependency lock file
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.js            # Vite build tool configuration

## Live Site
**Coming soon on Netlify** — the deployment will be available here:  
👉 [https://liliando.netlify.app](https://liliando.netlify.app) *(placeholder)*

---

## Solution URL
GitHub repository:  
👉 [https://github.com/Lilian-CR/liliando-ecommerce-store](https://github.com/Lilian-CR/liliando-ecommerce-store) *(placeholder)*

---

## Screenshots
📸 Homepage with featured categories  
📸 Product modal with quantity selection  
📸 Cart view with total and item management  
📸 Checkout form with modal confirmation

---

## Tools & Technologies
- **React** — component-based UI framework
- **Vite** — fast build tool for modern web apps
- **Tailwind CSS** — utility-first styling framework
- **React Router DOM** — for page navigation
- **Lucide React** — icon set
- **LocalStorage** — cart state persistence

---

## Resources
- Tailwind CSS Docs: https://tailwindcss.com
- React Docs: https://reactjs.org
- Lucide Icons: https://lucide.dev
- Inspiration: Zalando, Drug Church aesthetics, Canva visuals

---

## Developer
**Lilian Rodrigues**  
Afro-Brazilian creative & punk musician learning Full-Stack at ReDI School  
💻 Portfolio & links coming soon

---

## Installation

To run locally:
1. Clone the repository:
```bash
git clone https://github.com/Lilian-CR/liliando-ecommerce-store.git
```
2. Navigate into the project folder:
```bash
cd liliando-ecommerce-store
```
3. Install dependencies:
```bash
npm install
```
4. Run the dev server:
```bash
npm run dev
```

---

## Deployment
The project is deployed using **Netlify** for its ease of integration with React and GitHub. To deploy:
- Push the code to a GitHub repo
- Connect the repo to Netlify
- Set build command as `npm run build` and directory as `dist`

---

## Acknowledgements
- Special thanks to mentors and classmates at ReDI School Berlin
- Inspired by brands that align with alternative values and ethical fashion
- To every hardcore punk fan who codes with attitude — this one's for you 🤘🏾

