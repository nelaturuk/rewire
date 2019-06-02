const SolarToken = artifacts.require("SolarToken");

module.exports = function(deployer) {
  deployer.deploy(SolarToken);
};
