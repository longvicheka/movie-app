<div align="center">

# Movie App 

A modern Ionic + Angular app that lists trending movies and shows details. It uses standalone components, lazy routing, and Ionic UI for a smooth experience .

[![last commit](https://img.shields.io/github/last-commit/longvicheka/movie-app)](https://github.com/longvicheka/movie-app/commits)
[![typescript 59.5%](https://img.shields.io/badge/typescript-59.5%25-3178C6?logo=typescript)](https://github.com/longvicheka/movie-app/search?l=typescript)
[![languages 3](https://img.shields.io/github/languages/count/longvicheka/movie-app?style=flat)](https://github.com/longvicheka/movie-app)

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript)
</div>

## Tech stack

- Angular 18 with Standalone Components
- Ionic Framework 8 UI components and styles
- Capacitor 6 for native builds.
- RxJS 7 streams and HttpClient integration
- TypeScript 5 with Angular ESLint rules

## **Features**
- Trending movies list with skeleton loaders and badges on Home page .
- Deferred-rendering variant of Home with placeholders and error states .
- Infinite scroll pagination on both list pages .
- Movie details view with genres, release year, and budget formatting .
  
## **Architecture**
These scripts are defined in package.json.
* Routes define Home, Home Defer, and Details with lazy-loaded components in src/app/app.routes.ts .
* Service layer wraps TMDB endpoints in src/app/services/movie.service.ts .
* Standalone bootstrap with Ionic providers in src/main.ts .

## **Quick Start**
* Install dependencies
```bash
npm: npm install
yarn: yarn install
pnpm: pnpm install
bun: bun install
```
- Run the app.
```bash
1 npm start
```
Available scripts are defined in package.json (start, build, test, lint) .
```bash
1 # Dev server
2 npm start
3
4 # Production build
5 npm run build
6
7 # Unit test
8 npm test
9
10 # Lint
11 npm lint
```

## **Configuration**
- App ID/name and output directory are set in capacitor.config.ts and angular.json (outputPath: www) .
- Project type is angular-standalone in ionic.config.json .
- Global Ionic styles are imported in src/global.scss .

## **API and Environment**
- MovieService calls TMDB:
    - GET /movie/popular?page={page}&api_key=... (with delay for UX demo)
    - GET /movie/{id}?api_key=...
- Set your TMDB API key in src/environments/environment.ts. Do not commit real secrets. Production replaces files via angular.json fileReplacements .

## **Project Structure**
- src/app/home/*: List UI with loaders, badges, infinite scroll .
- src/app/home-defer/*: Deferred list with placeholders and error handling .
- src/app/details/*: Detail layout with icons and pipes .
- src/app/services/*: Interfaces and HTTP service to TMDB .
- src/theme/variables.scss: Ionic theme tokens and colors .

## **Testing**
- Karma + Jasmine setup is provided; run npm test to execute specs .
  
## **Build for Production**
- Build with npm run build; output goes to www as configured in angular.json .
- Adjust budgets and environment file replacements as needed in angular.json .

## **Contributing**
- ollow Angular ESLint rules in .eslintrc.json before submitting PRs .
