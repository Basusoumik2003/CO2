const { JsonRpcProvider, Wallet, Contract } = require("ethers");
const ethABI = require("../abi/GreenAssetsETH.json");
const polyABI = require("../abi/GreenAssetsPolygon.json");

const ethProvider = new JsonRpcProvider(`https://sepolia.infura.io/v3/eb6e569ef8f04c6c9fb30ebcdbd43c47`);
const polyProvider = new JsonRpcProvider(`https://polygon-amoy.infura.io/v3/eb6e569ef8f04c6c9fb30ebcdbd43c47`);

const wallet = new Wallet(process.env.PRIVATE_KEY, ethProvider);
const polyWallet = new Wallet(process.env.PRIVATE_KEY, polyProvider);

const ethContract = new Contract("0x5fa92b54dE8bf82f45FB76571EFF19524Ad6629e", ethABI, wallet);
const polyContract = new Contract("0x398B64780214e881EFD6ADd35CDaaDD0B5b53BA7", polyABI, polyWallet);

module.exports = { ethContract, polyContract };
