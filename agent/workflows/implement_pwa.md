---
description: How to implement a Progressive Web App (PWA) in a Next.js (App Router) project
---

# Implementing PWA in a Next.js Project

This workflow explains how to add Progressive Web App (PWA) capabilities, including installability and offline support, to your Next.js project. It's based on the setup intended for the Webronic Portfolio.

## 1. Install Dependencies
First, install the `next-pwa` package which automatically generates the service worker and handles caching strategies.
```bash
npm install next-pwa
```

## 2. Create the Web App Manifest
The manifest file tells the browser about your web application and how it should behave when 'installed' on the user's mobile device or desktop.

Create a file named `manifest.webmanifest` (or `manifest.json`) in your `public/` directory:

**Location:** `public/manifest.webmanifest`

```json
{
  "name": "Your Project Name",
  "short_name": "Project",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2776ea",
  "icons": [
    {
      "src": "/assets/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```
*Note: Make sure to place the actual icon images in your `public/assets/` or appropriate folder with the specified dimensions. Update the sizes and `src` paths according to your actual icon files.*

## 3. Link the Manifest in Layout
For Next.js App Router (`src/app/layout.tsx` or `src/app/layout.jsx`), you link the manifest within the exported `metadata` object.

**Location:** `src/app/layout.tsx`

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your app description",
  // Add this line to link your manifest:
  manifest: "/manifest.webmanifest",
  // Optional, but good practice to sync with the manifest:
  // themeColor: "#2776ea", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## 4. Configure `next.config.ts` (or `.js`)
To generate the service worker automatically on build, you need to wrap your Next.js configuration using the `next-pwa` plugin.

**Location:** `next.config.ts` (at the root of your project)

```typescript
import type { NextConfig } from "next";
// Assuming next-pwa handles TS. If using JS, it would be: const withPWA = require("next-pwa")(...)
import withPWAInit from "next-pwa";

// Initialize next-pwa
const withPWA = withPWAInit({
  dest: "public", // Where the service worker files will be generated
  register: true, // Auto-register the service worker
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in dev mode for better debugging
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  // ... any other specific next.js configurations
};

// Export wrapped configuration
export default withPWA(nextConfig);
```
*(If you are using CommonJS `next.config.js`, the syntax is `const withPWA = require("next-pwa")({ dest: "public", ... }); module.exports = withPWA(nextConfig);`)*

## 5. Add `.gitignore` Entries
The `next-pwa` plugin generates service worker caching files in your `public` directory during the build process. You should ignore these generated files in Git so they don't get committed to your repository.

**Location:** `.gitignore`

Add the following lines to your `.gitignore`:
```text
# PWA files
**/public/sw.js
**/public/workbox-*.js
**/public/worker-*.js
**/public/sw.js.map
**/public/workbox-*.js.map
```

## 6. Build and Test
Run a production build to test if the service worker (`sw.js`) and `workbox-*.js` files are successfully generated in the `public` folder.
```bash
npm run build
npm run start
```

Steps to verify:
1. Open your app in the browser (e.g., `http://localhost:3000`).
2. Open Chrome DevTools (or your preferred browser's equivalent).
3. Navigate to the **Application** tab.
4. Check **Manifest**: Ensure your properties and icons are loaded properly.
5. Check **Service Workers**: Ensure `sw.js` is registered and active.
6. Look for an "Install" icon (a screen with a down arrow) in the right side of the URL bar!
