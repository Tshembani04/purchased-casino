const { ethers } = require("ethers");
const SmartContractData = require("../models/smartContractData"); // Replace with your model path

const getSmartContractData = async () => {
  try {
    console.log("Fetched data from smart contract:", result);

    // Replace with your Infura project ID and desired network (e.g., 'sepolia')
    const provider = new ethers.providers.JsonRpcProvider(
      "https://sepolia.infura.io/v3/25344e151b4d4d288bcd5f5513174f5c"
    );

    // Replace with your smart contract address and ABI
    const contractAddress = "YOUR_SMART_CONTRACT_ADDRESS";
    const abi = []; // Replace with your smart contract ABI

    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Replace with the function name you want to call
    const functionName = "getValue";
    const options = []; // Replace with any optional parameters for the function

    const result = await contract[functionName](...options);

    console.log("Fetched data from smart contract:", result);

    // Save data to model (if applicable)
    const data = new SmartContractData({ data: result });
    await data.save();

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw for route handler to catch
  }
};

module.exports = { getSmartContractData };

const { ethers } = require("ethers");
const SmartContractData = require("../models/smartContractData"); // Replace with your model path

const getSmartContractData = async () => {
  try {
    // Moved the console log to after successful data retrieval
    console.log("Fetched data from smart contract:", result);

    // Replace with your Infura project ID and desired network (e.g., 'sepolia')
    const provider = new ethers.providers.JsonRpcProvider(
      "https://sepolia.infura.io/v3/YOUR_PROJECT_ID"
    );

    // Replace with your smart contract address and ABI
    const contractAddress = "YOUR_SMART_CONTRACT_ADDRESS";
    const abi = []; // Replace with your smart contract ABI

    const contract = new ethers.Contract(contractAddress, abi, provider);

    // Replace with the function name you want to call
    const functionName = "getValue";
    const options = []; // Replace with any optional parameters for the function

    const result = await contract[functionName](...options);

    // Save data to model (if applicable)
    const data = new SmartContractData({ data: result });
    await data.save();

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw for route handler to catch
  }
};

module.exports = { getSmartContractData };
