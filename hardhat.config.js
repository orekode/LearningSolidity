require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/CvznYreocReBwetCAVW5WyfH4iPMDI0g",
      accounts: ["0xc794e42f8c99035ba2c058fe4cc9dbaa1aa553498cb4bcc2e3c78881c9936d9b"]
    }
  }
};
// 024