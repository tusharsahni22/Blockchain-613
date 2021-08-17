const Web3 = require("web3");
// Omg Stablecoin ABI
const abi = require("./abi.json");
const INFURA_URL =
  "wss://mainnet.infura.io/ws/v3/d01d7251566d45fdb49bdf1d03beefb1";

const web3 = new Web3(new Web3.providers.WebsocketProvider(INFURA_URL));

// Address of Dai Stablecoin
const address = "0x0de35eafbc693c9e75cccf376e49a5f46d7917d6";

async function main() {
  const contract = new web3.eth.Contract(abi, address);

  console.log("Subscribe to Transfer event");

  contract.events.Transfer(
    {
      // filter by sender
      filter: { src: "0x6E578c81aab993D6912e9D5B8198Ec0B451899F1" }
    },
    (error, log) => {
      if (error) {
        console.log("Error", error);
      }

      console.log("Log", log);
    }
  );
}

main();