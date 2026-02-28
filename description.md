# Progressive Web App (PWA) Implementation Description

This document outlines the current state of PWA features in the application and how they are implemented.

## Overview

The application is built using **Next.js (App Router)** and has the foundational elements for a Progressive Web App (PWA). Currently, the app is **installable** but does not yet have active **offline capabilities** or **advanced caching** enabled.

## Current Implementation Details

### 1. Web App Manifest
The core of the current PWA implementation is the **Web App Manifest**, which allows users to install the application to their device's home screen.

- **File Location**: `public/manifest.webmanifest`
- **Configuration**:
  - **Name**: "Webronic Portfolio"
  - **Short Name**: "Webronic"
  - **Display Mode**: `standalone` (Appears like a native app without browser UI)
  - **Theme Color**: `#2776ea` (Matches brand identity)
  - **Background Color**: `#ffffff`
  - **Icons**: 
    - 192x192 (PNG)
    - 512x512 (PNG)

### 2. Meta Tags & Linking
The manifest is linked in the root layout file, ensuring it is detected by browsers on all pages.

- **File Location**: `src/app/layout.tsx`
- **Implementation**:
  ```tsx
  export const metadata: Metadata = {
    // ... other metadata
    manifest: "/manifest.webmanifest",
    // ...
  };
  ```

## Libraries Used

- **`next-pwa`**: This package is listed in `package.json` dependencies. It is a popular plugin for Next.js to generate service workers and handle caching strategies automatically.

## Missing Configuration (Action Required for Full PWA)

While `next-pwa` is installed, it is **currently not configured** in `next.config.ts`. This means:
1.  **No Service Worker**: The service worker file (`sw.js` or `worker-<hash>.js`) is not being generated during the build.
2.  **No Offline Support**: The app will not work offline.
3.  **No Caching**: Assets are not being cached for faster subsequent loads.

### How to Enable Full PWA Support

To activate the service worker and offline capabilities, update `next.config.ts` to wrap the configuration with `next-pwa`.

**Current `next.config.ts`:**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Note: 'export' often requires specific PWA configs or may limit some SW features
  // ...
};

export default nextConfig;
```

**Recommended Update for `next.config.ts`:**
```typescript
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  // ... current config
};

module.exports = withPWA(nextConfig);
```
*(Note: Since you are using `output: "export"`, ensure standard service worker generation is compatible with your static export workflow.)*
