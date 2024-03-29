# BaseModule

This is an angular project aimed at demonstrating some of the basic methodologies used in Angular. A branch of this
project 'ngrx' exists to demonstrate how to implement the redux pattern in the project.

Be aware that as this is a demo project, some essentials such as testing has not been implemented.

The project consists of a basic json server containing some test data. The json server is a powerful tool for running
locally against a simple rest server. For more information on how the json server works,
see https://github.com/typicode/json-server.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14, but is updated to
the newest version of angular when released.

## Development server

Run `npm run json-server` to start the backend server. The server contained 3
endpoints: `http://localhost:3000/diagnoses`, `http://localhost:3000/patients`, `http://localhost:3000/address`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

Run 'start-docserver' for a documentation server. Navigate to `http://localhost:8088/`. This step requires you to have
the http-server installed. You can install it with `npm install -g http-server`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag
for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
