import { JsonRpcProvider, Contract } from "ethers";
import abi from "../abi/GreenAssetsETH.json";

const contractAddress = "0x5fa92b54dE8bf82f45FB76571EFF19524Ad6629e";

export async function fetchTreeData(treeId) {
  const provider = new JsonRpcProvider(`https://sepolia.infura.io/v3/eb6e569ef8f04c6c9fb30ebcdbd43c47`);
  const contract = new Contract(contractAddress, abi, provider);
  return await contract.treeAssets(treeId);
}
