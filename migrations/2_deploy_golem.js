const golem = artifacts.require("Golem");

module.exports = async function (deployer, network, accounts) {
    console.log('deploying to: ', network);
    //deploy contract
    await deployer.deploy(golem);
    //access information about your deployed contract instance
    const instance = await golem.deployed();
    console.log("golem deployed at: ", instance.address);
};
