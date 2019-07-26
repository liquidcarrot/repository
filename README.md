# Repository
>A boilerplate repository for JavaScript DevOps tools like LoDash, Async, Debug, etc.

## Problems

Creating repositories like LoDash, Neo-Async (& Async), BlueBird, in JavaScript is HUGE pain in the ass! A lot of time is spent working on things that are not the main repository. This repository will help get kickstarted with:

- **Documentation**
- **Unit Tests**
- **Benchmarks**
- **Code Coverage**
- **Linting**
- **Licenses**
- **Code of Conducts**
- **Contribution Guidelines**
- **Patronage**
- **Code Tranpiling** - _supporting older version of JavaScript_
- **Code Wrangling** - _shortening code and making it unreadable for production._
- **Node.js & Browser** Support - _effectively navigating the hell-hole that is module/package importing/exporting in JavaScript_

## Scripts

The following is a list of scripts that can be used to manipulate different components of a library.

### Documentation

**Markdown + HTML**
>Creates (or updates) a `DOCUMENTATION.md` file in the root of your repository using `JSDoc` and generates `.html` files in the `doc/` folder which hold a website version of `DOCUMENTATION.md`.

```bash
npm run docs
```

**Markdown (Only)**
>Creates (or updates) a `DOCUMENTATION.md` file in the root of your repository using `JSDoc`


```bash
npm run docs:markdown
```

**HTML (Only)**
>Generates `.html` files in the `doc/` folder which hold a website version of `DOCUMENTATION.md`.

```bash
npm run docs:html
```

### Testing (Mocha)

**Node.js + Browser**
>Runs units tests in terminal (CLI) & in your default browser - typically through `https://localhost:8080/`

```bash
npm test
```

**Node.js (Only)**
>Runs units tests in terminal (CLI)

```bash
npm run test:node
```

**Browser (Only)**
>Runs units tests in your default browser - typically through `https://localhost:8080/`

```bash
npm run test:browser
```
