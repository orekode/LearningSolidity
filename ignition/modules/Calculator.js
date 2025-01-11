
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Calculator", (m) => {

    const calculator = m.contract("Calculator", []);

    m.call(calculator, "get", []);

    return { calculator };

});