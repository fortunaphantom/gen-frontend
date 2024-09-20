## Project Overview

https://gen-nft-test.netlify.app

This report outlines the development and implementation of a decentralized application (dApp) that allows users to interact with their Non-Fungible Tokens (NFTs) on the Polygon blockchain. The application facilitates wallet connection, NFT display, detailed NFT views, NFT transfers, and minting of new NFTs. The project utilizes a combination of frontend and backend technologies, with a focus on user experience and efficient blockchain interaction.

## Userflow

This project is Vue3 + Vuetify + Typescript project.
Users interact with digital assets on the Polygon blockchain using a provided ERC-721 (Non-Fungible Token, or NFT) smart contract

- Polygon smart contract address: https://polygonscan.com/address/0x37e286743FB7D42E220FAA1EAddE6668C8A2775B#code

Users connect their EVM wallet and all owned NFTs are displayed in the first page.

Users click `Mint` button to mint a new NFT token. The meatadata is given randomly from the backend.

Users click the individual asset in the first page to see details. If the user is the owner of that nft, user can transfer his asset to other addresses.

## How to run

- npm install
- npm run dev

## Project structure

- api: API endpoints
- assets: static assets
- components: commonly used Vue components
- config: default config variables
- contract: Solidity smart contract abis
- declarations: interfaces for typescript modules
- helpers: commonly used functions
- layouts: app main layout
- pages: app pages
- plugins: Vuetify plugins directory
- router: vue-router configuration
- stores: pinia vue state management
- styles: global styles for the app
- types: type definitions
- wagmi: wagmi config for blockchain interaction

## Frontend Implementation

### Technologies Used

- **Vue.js 3**: A progressive JavaScript framework for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **Vuetify**: A Material Design component framework for Vue.js, used for building a responsive and visually appealing user interface.
- **wagmi**: A React Hooks library for Ethereum that simplifies wallet interactions.

### Features

1.  **Wallet Connection**: Users can connect their cryptocurrency wallets to the application using the wagmi library.
2.  **NFT Display**: Once the wallet is connected, the application fetches and displays all owned NFTs. This data is retrieved from the Moralis API via the backend.
3.  **NFT Detail View**: Users can click on an NFT to view detailed information about it. Vue Router is used to handle navigation to the NFT detail page.
4.  **NFT Transfer**: If the user is the owner of the NFT, a transfer button is displayed. The user can transfer the NFT to another address.
5.  **NFT Minting**: A mint button in the head bar allows users to mint new NFTs. The backend generates a random IPFS URI and sends a transaction to the smart contract with the token URI.

## Backend Implementation

### Technologies Used

- **Express.js**: A minimal and flexible Node.js web application framework.
- **TypeScript**: Used to ensure type safety and improve code quality.
- **Hardhat**: A development environment to compile, deploy, test, and debug Ethereum software.

### Features

1.  **Moralis API Integration**: The backend fetches owned NFTs for the connected wallet using the Moralis API.
2.  **Smart Contract Deployment**: A new NFT contract was created and deployed to the Polygon network using Hardhat.
3.  **NFT Minting**: The backend handles the minting process, generating a random IPFS URI and sending the transaction to the smart contract.
4.  **Exception Handling**: Custom middlewares and loggers are implemented to handle exceptions globally, ensuring robust error management.

## Challenges and Solutions

### Pinata Uploading

- **Challenge**: The Pinata service requires a membership for uploading files, which posed a limitation.
- **Solution**: Although the Pinata uploading function was implemented, it couldn't be used due to the membership requirement. As an alternative, random IPFS URIs were generated for the minting process.

### Smart Contract Links

- **Challenge**: The provided smart contract links were invalid.
- **Solution**: A new NFT contract was created and deployed to the Polygon network using Hardhat, ensuring the functionality of the minting process.

* Polygon smart contract address: https://polygonscan.com/address/0x37e286743FB7D42E220FAA1EAddE6668C8A2775B#code

## Conclusion

This project successfully demonstrates the integration of various technologies to create a functional and user-friendly dApp for NFT interaction on the Polygon blockchain. The combination of Vue.js, Vuetify, and TypeScript in the frontend, along with Express.js and TypeScript in the backend, provided a robust framework for development. The use of wagmi for wallet interactions and Hardhat for smart contract deployment further streamlined the process. Despite facing challenges with Pinata and invalid smart contract links, effective solutions were implemented to ensure the application's functionality.


