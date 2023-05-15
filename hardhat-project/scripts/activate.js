const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const address = YOUR_CONTRACT_ADDRESS;
  const abi = YOUR_CONTRACT_ABI;

  try {

  const [owner] = await ethers.getSigners();
  
  const nftContract = new ethers.Contract(address, abi, owner);

  const tx = await nftContract.startPresale();
  await tx.wait();
  

  } catch(err) {
    console.log(err);
  }
  

  // print the address of the deployed contract
  console.log(
    "The contract was activated",
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

