import axios from 'axios';
import * as ethers from 'ethers';
import dotenv from 'dotenv';
import clearingHouseABI from "./abis/ClearingHouse.json" assert { type: "json" };

dotenv.config();

async function execute() {
    let res = await axios.get('https://api3.nftperp.xyz/contracts')
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_PROVIDER);
    const wallet = await new ethers.Wallet(process.env.PRIV_KEY, provider);
    const contract = new ethers.Contract(res.data.data.clearingHouse, clearingHouseABI.abi, wallet);

    let amms = res.data.data.amms;

    for (let amm in amms) {
      await contract.settleFunding(amms[amm])
    }
}

execute()