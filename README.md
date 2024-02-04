### Original project :[https://www.youtube.com/watch?v=Wn_Kb3MR_cU](https://github.com/adrianhajdin/project_web3.0)

### Smart Contract Code Repo:https://github.com/cxp-13/krypt_smart_contract 

This project focuses on fixing the following issues:

1. In the smart contract section, the `node_package` for the Hardhat project no longer requires downloading so many libraries.
2. Upgraded ethers to version 6.
3. Replaced the deprecated method of handling the amount of ETH currency sent in `eth_sendTransaction` with BN.js instead of `parsedAmount._hex`.
4. Some configurations in the `tailwind.config.js` file and certain properties in Tailwind itself have been deprecated.
5. Solve the problem of obtaining all transaction data conversion

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and includes some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Installation

To use this template, simply clone this repository and install the dependencies:

```sh
git clone https://github.com/<your_username>/<your_project_name>.git
cd <your_project_name>
npm install
```

## Usage

Start the development server:

```sh
npm run dev
```

This will start a local server at `http://localhost:3000`, where you can preview your application. Any changes made to your code will trigger HMR, updating the browser without refreshing the page.

To build for production, run:

```sh
npm run build
```

This will generate a production-ready build in the `dist` directory.

## ESLint Rules

This template comes with some ESLint rules configured for React and Prettier. You can customize these rules by modifying the `.eslintrc.js` file.

## Plugins

This template comes with two official plugins pre-installed:

- `@vitejs/plugin-react`
- `@vitejs/plugin-react-swc`

You can choose which plugin to use by modifying the `vite.config.js` file. By default, `@vitejs/plugin-react` is used.

## License

This template is licensed under the MIT License.
