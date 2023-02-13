require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('hardhat-contract-sizer');

module.exports = {
  defaultNetwork: "testnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: ["920d292a33001b65f7f76f2ef02b02b21d8b9e9691bfaeb11dc6206ae6176a86"]
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: ["920d292a33001b65f7f76f2ef02b02b21d8b9e9691bfaeb11dc6206ae6176a86"]
    }
  },
  etherscan: {
                apiKey: "RB3Z6H2RM3SRU51Y2DF49RYR71EKW34AFA"
  },
  solidity: {
  version: "0.8.12",
  settings: {
    optimizer: {
      enabled: true,
	  runs: 200
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};

