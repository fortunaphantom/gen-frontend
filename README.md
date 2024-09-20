# Project description

This project is Vue3 + Vuetify + Typescript project.
Users interact with digital assets on the Polygon blockchain using a provided ERC-721 (Non-Fungible Token, or NFT) smart contract

- Polygon smart contract address: https://polygonscan.com/address/0x37e286743FB7D42E220FAA1EAddE6668C8A2775B#code

Users connect their EVM wallet and all owned NFTs are displayed in the first page.

Users click `Mint` button to mint a new NFT token. The meatadata is given randomly from the backend.

Users click the individual asset in the first page to see details. If the user is the owner of that nft, user can transfer his asset to other addresses.

# How to run

- npm install
- npm run dev

# Project structure

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