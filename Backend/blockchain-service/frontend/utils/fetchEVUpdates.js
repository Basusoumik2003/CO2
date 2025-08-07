import { JsonRpcProvider, Contract } from "ethers";
import abi from "../abi/GreenAssetsPolygon.json";

const contractAddress = "0x398B64780214e881EFD6ADd35CDaaDD0B5b53BA7";

export async function fetchEVUpdates(eid) {
  const provider = new JsonRpcProvider(`https://polygon-amoy.infura.io/v3/eb6e569ef8f04c6c9fb30ebcdbd43c47`);
  const contract = new Contract(contractAddress, abi, provider);
  return await contract.evUpdates(eid);
}
