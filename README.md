# JBI - FRONTEND TEST

## Basic Structure

```md
├── src
│   ├── __mock__
│   ├── components
│   │   ├── ComponentsList
│   │   ├── SearchBar
│   └── styles
```

- **\_\_mock\_\_**: contains the mock structure used to generate the list. In a real life project, it could be a Graphql Return, a REST call return etc.
- **components**: here lives the core of the test. I divided it in two components for better organization - ComponentsList and SearchBar. ComponentsList has all the behavior for this test. In a real life project, part of the behavior could live in a BFF or helpers.
- **styles**: I added this styles global directory to give more flexibility and organization for the styles (specially colors). Again, in a real life project this could be a theme provided to the application or even come from a BFF. 


## Tech Stack

Core:

- Yarn
- ReactJS
- styled-components

Development:

- Vite
- Prettier
- ESlint

## Local Development Environment

> Before proceed, make sure you have node LTS version and git installed.

### Clone repository

---

On your terminal, in the directory that you want to clone the project, run:

```bash
git clone https://github.com/Diogo-Felipe/jbi-fe-test
```

> If you are using ssh, you need to use the git clone git@github.com:Diogo-Felipe/jbi-fe-test.git


### Install dependencies

---

You need to install node dependencies in order to run the project correctly.

Inside of the repository directory on your local machine, run:

```bash
yarn install
```

### Run in dev mode

---

To run the project with live reload, you can run the following command:

```bash
yarn dev
```

It will provide the react in a local port (the most common is http://localhost:5173/)
