# noobs-first-project

## Prerequisites and System Requirements

Before getting started with this project, please ensure you have the following software and system requirements:

- **Node.js:** The monorepo uses `Node.js` version `18` as its base. Make sure you have this version of Node.js installed on your system. The correct version of `npm` will automatically be installed alongside this.

## Setting Up and Running Projects Locally

To set up and run our project locally for development, follow these steps from the root folder:

1. **Install Dependencies:**

   - In the root of the project, run `npm install` to install all the necessary dependencies for the project.

2. **Start Project:**

   - To start the project in development mode, use `npm run dev`.
   - Open Chrome and go to `chrome://extensions/`.

- Drag the `dist` folder into the extensions to install
- Go to extensions and click on the extension name
  _n.b hot reloading will work by default with the extension open_

3. **Linting:**

   - You can run the lint command for all projects by running `npm run lint`. If you want to attempt automatic fixes for eslint, TypeScript (tsc), or Prettier issues, use `npm run lint:fix`.
