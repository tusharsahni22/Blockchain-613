const Web3 = require("web3");
// Address of OMG Coin
const abi = require("./abi.json");
const INFURA_URL =
  "wss://mainnet.infura.io/ws/v3/d01d7251566d45fdb49bdf1d03beefb1";

const web3 = new Web3(new Web3.providers.WebsocketProvider(INFURA_URL));

// Address of OMG Coin
const address = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07";

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