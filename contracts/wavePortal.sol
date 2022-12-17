// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;
import "hardhat/console.sol";

contract WavePortal {
  uint256 totalWaves;

  constructor() {
    console.log("Hey, This is my first smart contract.");
  }

  // calling the waves update function & getting the address of 
  // person waving in the console
  function wave() public {
    totalWaves +=1;

    console.log("%s has waved!", msg.sender);
  }

  // gettint the total no. of waves done
  function getTotalWaves() public view returns (uint256){
    console.log("we have %d total waves!", totalWaves);
    return totalWaves;
  }
}

// Now we'll call this functions in the js file.