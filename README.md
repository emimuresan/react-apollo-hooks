# React Apollo Demo Project

Demo project with React-Apollo v3.0 beta and AWS AppSync & Amplify used to create a serverless GraphQL backend.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Initialize a Backend

Prerequisite: [Install and configure the Amplify CLI](https://docs.amplify.aws/start/getting-started/installation/q/integration/react#install-and-configure-the-amplify-cli).

```
$ amplify configure
```

1. Set up Amplify

```
$ amplify init
```

2. Install Amplify libraries

```
$ npm install aws-amplify @aws-amplify/ui-react
```

3. Setup the frontend (add code in `src/index.js`)

```
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
```

4. Add a GraphQL API and automatically provision a database

```
$ amplify add api
```

5. Deploying the API

```
$ amplify push
```

6. Check Amplify’s status

```
$ amplify status
$ amplify console api
```

The fronted is now ready to be connected to the API using the API key.

More detailed steps can be found [here](https://docs.amplify.aws/start/getting-started/data-model/q/integration/react#).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Docs

Apollo Client (React) v3.0: https://www.apollographql.com/docs/react/v3.0-beta
