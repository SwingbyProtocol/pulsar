<p align="center"><img src="https://raw.githubusercontent.com/SwingbyProtocol/pulsar/master/docs/logo.png" height="100" alt="Pulsar" /></p>

Pulsar is a library of [React](https://reactjs.org/) components built with
[styled-components](https://www.styled-components.com/).

## Getting started

1. Install this library with:

   ```bash
   yarn add @swingby-protocol/pulsar react-spring styled-components polished
   yarn add --dev @types/styled-components
   ```

2. Use `<PulsarThemeProvider />` with no props at the root of your app so that you get automatic
   theme switching out of the box. Optionally, you may also use `<PulsarGlobalStyles />`.

   ```tsx
   import React from 'react';
   import {
     PulsarThemeProvider,
     Button,
     PulsarGlobalStyles,
     PulsarToastContainer,
   } from '@swingby-protocol/pulsar';

   export const MyApp = () => {
     return (
       <PulsarThemeProvider>
         {/* Optional, to load the Inter font with `next/head`, `react-helmet`, etc. */}
         <Head>
           <link rel="stylesheet" href={PULSAR_GLOBAL_FONT_HREF} />
         </Head>
         <PulsarGlobalStyles /> {/* Optional */}
         <h1>My cool app</h1>
         <Button variant="primary" size="country">
           Click here!
         </Button>
         <PulsarToastContainer /> {/* Put this somewhere near the root of your app if you are going to use toasts */}
       </PulsarThemeProvider>
     );
   };
   ```

   If you are using Next.js, you should probably use `<PulsarThemeProvider />` in your `_app.tsx`
   file.

### TypeScrip integration

Add a definitions file like the following anywhere in your project.

```tsx
// DefaultTheme.d.ts
import 'styled-components';
import { PulsarThemeProvider } from '@swingby-protocol/pulsar';

declare module 'styled-components' {
  export interface DefaultTheme extends PulsarThemeProvider {}
}
```
