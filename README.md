# namaste-react

# parcel
- Dev Builds
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compressing
- consistent Hashing 
- code splitting
- Differential bundler - supports older browsers
- Diagnostic
- Error handling
- Https
- Tree Shaking - Remove unsued Code
- Different Dev and prod bundles

// Header 
//  - logo
//  - Navi Items
// Body
//  - Search
//  - Restaurants-Container
//   - Restro Cards
//      - img
//      - Name os Res, Start Rating, Cuisine, delivery time..Etc
// Footer
// - Adress
// - Disclaimer
// - links



They are Two types Exports
- Default Export/Import

export default component
import component from "path";

- Named Export 

export const component;
import {component} from "path"


<!-- React Hooks -->
(Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()

<!-- 2 types Routing in web apps -->
- Client Side Routing
- Server Side Routing


<!-- Redux Toolkit -->
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

<!-- Types of testing (devloper) -->
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

<!-- Setting up Testing in our app -->
<!--1. While doing the below step we should also check the compitable node version -->
<!-- Steps to Enable Testing Manually -->
- Install React Testing Library -> build on Top of DOM testing Library
- Installed jest
- Installed Babel dependencies on jest Website
- Configure Babel (babel.config.js)
- Configure Parcel Config file (.parcelrc) to disable default babel transpilation
- Jest configuration- npx jest --init <!-- __ (underscore underscore) is know as dunder method -->
  - TypeScript / Yes or No
  - jsdom(browser-like)
  - coverage reports -> Yes
  - code for coverage -> babel
  - clear mock calls, instances, contexts and results before every test? 
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases <!--   here preset is converting into normal html code -->
- Include @babel/preset-react inside my babel config
-  npm i -D @testing-library/jest-dom


<!-- Note:  -->
- screen.getByRole("Heading"); This will give the JSX Element

<!-- dunder method -->
-> __tests__  