# Financial Advisor Landing Page

> A responsive single-page React application to match users with vetted financial advisors based on their unique needs and goals.

## 🚀 Features

- Multi-step advisor matching form with progress indicators
- Responsive design powered by Tailwind CSS
- Client-side routing with React Router
- Optimized build and fast HMR via Vite
- SEO-friendly landing sections (Hero, Testimonials, FAQs, etc.)
- Single-page-app routing fallback configured for Netlify

## 🛠 Tech Stack

- **Framework:** React 18 with TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS & PostCSS
- **Routing:** React Router v6
- **Icons:** FontAwesome & Lucide React
- **Forms & UI:** Headless UI

## 📁 Project Structure

```
.  
├─ index.html                 # HTML entrypoint
├─ package.json               # NPM scripts & dependencies
├─ vite.config.ts             # Vite configuration
├─ tailwind.config.js         # Tailwind CSS configuration
├─ postcss.config.js          # PostCSS configuration
└─ src/                       
   ├─ main.tsx                # ReactDOM bootstrap
   ├─ App.tsx                 # Application routes & layout
   ├─ index.css               # Global styles (Tailwind imports)
   ├─ assets/                 # Static images & assets
   ├─ components/             # Reusable UI components & multi-step form
   └─ pages/                  # Page components (Home, FindAdvisorPage)
```

## ⚙️ Installation & Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`

## 📦 Build & Preview

- Build for production:
  ```bash
  npm run build
  ```
- Preview the production build locally:
  ```bash
  npm run preview
  ```

## 📄 Linting

ESLint is configured for code quality:
```bash
npm run lint
```

## 🚩 Deployment

This project is configured for Netlify as a single-page application. See `netlify.toml` for redirects.

## 📖 Contributing

This repository uses commit conventions enforced by Bolt (see `.bolt/config.json`). Please follow the template when creating commits and pull requests.

---

**Private Project** – Not for public distribution.
