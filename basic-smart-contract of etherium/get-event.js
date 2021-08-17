const Web3 = require("web3");
// Omg Stablecoin ABI
const abi = require("./abi.json");
const INFURA_URL =
  "https://mainnet.infura.io/v3/d01d7251566d45fdb49bdf1d03beefb1";

const web3 = new Web3(INFURA_URL);

// Address of OMG Coin
const address = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07";

//PRINTING THE LATEST BLOCK NUMBER

async function main() {
  const latest = await web3.eth.getBlockNumber();

  console.log("Latest block:", latest);

  const contract = new web3.eth.Contract(abi, address);

  const logs = await contract.getPastEvents("Transfer", {
    fromBlock: latest - 100,
    toBlock: latest,
    
  });
  console.log("Transfer :",logs)

  
}

main();

