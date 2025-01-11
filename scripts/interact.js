import pkg from 'hardhat'

const { ethers } = pkg;
const MyContract = await ethers.getContractFactory("Calculator");
const contract = MyContract.attach("0xf371873AdCFc9CdB77970196eeB8E6DF520610A2");

contract.get();