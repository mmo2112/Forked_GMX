const hre = require("hardhat");
const contractName = "Staking";

async function main() {
    const contract = await hre.ethers.getContractFactory(contractName);
    const c = await contract.deploy("0x83ba71500031edEA7548527040b18BB8B0DDf24e");
    console.log("Contact " + contractName + " deployed to: " +  c.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log("Deploy contract " + contractName + " error", error);
    process.exit(1);
});
