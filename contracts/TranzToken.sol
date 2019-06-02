pragma solidity >=0.4.19 <0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
  
contract TranzToken is ERC20 {
    string public name = "TranzToken";
    string public symbol = "TRANZ";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 36000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}