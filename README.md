# AngularRouterExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

Project illustrating the capabilities of the Angular router.

1) basic router setup, mapping url paths to components which are injected into <router-oulets>.
2) different types of declarative outer links
3) different types of programatic router links
4) children routes
5) auxiliary routes
4) can activate guard, when first switching to the course page a login form is shown, 
simulating a protected page. 
5) can deactivate guard, when moving away from the course path a confirmation dialog 
is shown, simulating the detection of a dirty page and prompting the changes should be saved or ignored.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
