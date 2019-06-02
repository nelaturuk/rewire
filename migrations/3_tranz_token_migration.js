const TranzToken = artifacts.require("TranzToken");

module.exports = function(deployer) {
  deployer.deploy(TranzToken);
};
