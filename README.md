# Repository
>A boilerplate repository for JavaScript DevOps tools like LoDash, Async, Debug, etc.

## Problems

Creating repositories like LoDash, Neo-Async (& Async), BlueBird, in JavaScript is HUGE pain in the ass! A lot of time is spent working on things that are not the main repository. This repository will help get kickstarted with documentation, unit tests, benchmarks, licenses, code of conducts, contribution guidelines, linting, code transpiling, code wrangling, code coverage, patronage, and Node.js & Browswer Support.

## Scripts

The following is a list of scripts that can be used to manipulate different components of a library.

* **`npm run docs`:** _Creates (or updates) a `DOCUMENTATION.md` file in the root of your repository using `JSDoc` and generates `.html` files in the `doc/` folder which hold a website version of `DOCUMENTATION.md`_
* **`npm run docs:markdown`** _Creates (or updates) a `DOCUMENTATION.md` file in the root of your repository using `JSDoc`_
* **`npm run docs:html`** _Generates `.html` files in the `doc/` folder which hold a website version of `DOCUMENTATION.md`_
* **`npm test`** _Runs units tests in terminal (CLI) & in your default browser - typically through `https://localhost:8080/`_
* **`npm run test:node`** _Runs units tests in terminal (CLI)_
* **`npm run test:browser`** _Runs units tests in your default browser - typically through `https://localhost:8080/`_

## File Structure

```
.
|__ README.md
|__ DOCUMENTATION.md
|__ CODE_OF_CONDUCT.md
|__ CONTRIBUTING.md
|__ LICENSE
|__ package.json
|__ .gitignore
|__ dist/
|__ docs/
|__ tests/
|__ scripts/
|__ src/
```

## Getting Started

* [Unit Testing](https://github.com/liquidcarrot/repository/wiki/Unit-Testing)
* [Documenting](https://github.com/liquidcarrot/repository/wiki/Documenting)
* [Packaging](https://github.com/liquidcarrot/repository/wiki/Packaging)