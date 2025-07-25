# Setup

## Deployment
I need to make and deploy a React App. The app will be fully frontend for now. The app should be in typescript and use vite.

I want the deployment to be free. The traffic will be limited to a few people.

1. I ran `npm create vite@latest` and selected "React" and "TypeScript + SWC".
2. I pushed and ran the repo in Vercel. It's online now - https://book-recs-chi.vercel.app/

## Routing
I need to set up routes.
### What we did and why:
**Routing:**
To manage navigation within our single-page application, we decided to use `react-router-dom`. This library is the industry standard for client-side routing in React.
1.  **Installation**: We installed `react-router-dom` and its TypeScript type definitions (`@types/react-router-dom`) to enable routing functionalities and ensure type safety.
2.  **Page Components**: We created a `src/pages` directory and defined three basic components: `HomePage.tsx`, `BooksPage.tsx`, and `NotFoundPage.tsx`. These components represent the different views or "pages" of our application.
3.  **Router Setup (`src/App.tsx`)**:
    *   We wrapped our entire application with `BrowserRouter`. This component uses the HTML5 history API to keep your UI in sync with the URL.
    *   Inside `BrowserRouter`, we used `Routes` to define a collection of individual `Route` components.
    *   Each `Route` component specifies a `path` (the URL path) and an `element` (the React component to render when that path matches).
    *   We added navigation links using the `Link` component from `react-router-dom`. `Link` prevents full page reloads and handles client-side navigation efficiently.
    *   A `Route` with `path="*"` was added as a catch-all for any undefined routes, rendering the `NotFoundPage` component for 404 errors.
4.  **Main Entry Point (`src/main.tsx`)**: We ensured that `App` (now containing the router) is rendered within `React.StrictMode` to enable additional checks and warnings during development, and then mounted to the root DOM element.

