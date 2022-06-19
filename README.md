# Oxygen UI
>Breathe life into your application.

## Packages

Oxygen UI is split into six packages: data-display, feedback, inputs, layout, navigation, and surfaces.

Each package contains a set of components for use within your application. Pick and choose which packages to install.

## Generate a package

Oxygen UI uses NX. To generate a new package, run `nx g @nrwl/react:lib <name> --publishable --inputPath=@oxygen-ui/<name>` to generate a library.

Add the associated commands: `build:<name>`, `dev:<name>`, `e2e:<name>`, and `test:<name>` to the root package.json file.

## Storybook development server

Run `npm run dev:<package>` for a storybook dev server. Navigate to http://localhost:4400/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g component <name> --project=<package>` to generate a new component.
Once the component is generated, run `nx g @nrwl/react:stories --project=<package>` to generate cypress e2e tests and stories for storybook development.

## Build

Run `npm run build:<package>` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test:<package>` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `npm run e2e:<package>` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
