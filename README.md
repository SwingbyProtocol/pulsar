<p align="center"><img src="https://raw.githubusercontent.com/SwingbyProtocol/pulsar/alpha/docs/logo.png" height="100" alt="Pulsar" /></p>

Pulsar is a library of [React](https://reactjs.org/) components built with
[styled-components](https://www.styled-components.com/).

## Getting started

1. Install this library as a dependency with `yarn add @swingby-protocol/pulsar`.

2. Use `<PulsarThemeProvider />` with no parameters at the root of your app so that you get
   automatic theme switching out of the box.

   ```tsx
   import React from 'react';
   import { PulsarThemeProvider, Button } from '@swingby-protocols/pulsar';

   export const MyApp = () => {
     return (
       <PulsarThemeProvider>
         <h1>My cool app</h1>
         <Button variant="primary" size="country">
           Click here!
         </Button>
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
import { PulsarThemeProvider } from '@swingby-protocols/pulsar';

declare module 'styled-components' {
  export interface DefaultTheme extends PulsarThemeProvider {}
}
```
