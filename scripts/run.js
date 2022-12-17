const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed by: ", deployer.address);
  console.log("Account Balance: ", accountBalance.toString());

  await waveContract.getTotalWaves();
  // const waveTxn = await waveContract.wave();
  // await waveTxn.wait();

  const waveTxn = await waveContract.wave();
  await waveTxn.wait();

  await waveContract.getTotalWaves();
  console.log("Contract deployed at address: ", waveContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();