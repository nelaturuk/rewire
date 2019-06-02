pragma solidity >=0.4.19 <0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
  
contract SolarToken is ERC20 {
    string public name = "SolarToken";
    string public symbol = "SOLAR";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 12000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}