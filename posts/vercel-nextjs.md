---
title: "Next.js and Vercel"
date: "2023-03-29"
---

Vercel is made by the creators of **Next.js** and has first-class support for Next.js. When you deploy your Next.js app to Vercel, the following happens by default:

Pages that use **Static Generation and assets (JS, CSS, images, fonts, etc)** will automatically be served from the Vercel Edge Network, which is **blazingly fast**.
Pages that use **Server-Side Rendering and API routes** will automatically become isolated Serverless Functions. This allows page rendering and API requests to **scale infinitely**.
Vercel has many more features, such as:

**Custom Domains**: Once deployed on Vercel, you can assign a custom domain to your Next.js app. Take a look at our documentation here.
**Environment Variables**: You can also set environment variables on Vercel. Take a look at our documentation here. You can then use those environment variables in your Next.js app.
**Automatic HTTPS**: HTTPS is enabled by default (including custom domains) and doesn't require extra configuration. We auto-renew SSL certificates.
