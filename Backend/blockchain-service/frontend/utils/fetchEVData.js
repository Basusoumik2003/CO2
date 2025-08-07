import { ethers } from "ethers";
import abi from "../abi/GreenAssetsETH.json";

const contractAddress = "0x5fa92b54dE8bf82f45FB76571EFF19524Ad6629e";

export async function fetchEVData(eid) {
   const infuraProjectId = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID;
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/eb6e569ef8f04c6c9fb30ebcdbd43c47`);
  //const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`);
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return await contract.evAssets(eid);
}
