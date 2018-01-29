# Ephraim Pei's Personal Site

[![Build Status](https://travis-ci.org/ephraimpei/ephraimpei.github.io.svg?branch=master)](https://travis-ci.org/ephraimpei/ephraimpei.github.io)
[![Coverage Status](https://coveralls.io/repos/github/ephraimpei/ephraimpei.github.io/badge.svg?branch=master)](https://coveralls.io/github/ephraimpei/ephraimpei.github.io?branch=master)

This personal site is an entirely static site (no backend) that was built with some of today's lastest and greatest Front End technologies.

## Features
- Angular5 components and routing
- Mobile first responsive SASS
- CSS3 animations
- AWS S3 Static Website Hosting
- Cloudflare CDN propagation
- Travis CI builds and automated AWS S3 deploys

## Technologies
- [Angular CLI](https://github.com/angular/angular-cli)
(bootstraps the following technologies):
  1. Angular5
  2. Typescript
  3. SASS
  4. Karma
  5. Webpack
- AWS CLI
- Cloudflare
- Travis CI

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to run the production build of project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
