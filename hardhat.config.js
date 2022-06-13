require("@nomiclabs/hardhat-waffle");
// Import and configure dotenv
require("dotenv").config();
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  }
}

// Deploying contracts with account:  0x7ad2869a1117fF6A9a2e1C64F3C5350AEaDa1B2F
// Account balance:  579160056139618284