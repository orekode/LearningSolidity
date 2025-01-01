// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26; // this line specifies the solidity compiler for the code

contract Hello {
    //variables
    string public welcome = "Hello World"; // just represents text
    address Myaddress = 0x32Be343B94f860124dC4fEe278FDCBD38C102D88; // used to store addresses to wallets
    bool isReady = true; //boolean true or false values
    uint8 max_supply = 10; //integers max:255
    uint16 max_num = 100; //integer max: 65535
    uint256 wait_time = 1 days; //integer larger than uint8

}