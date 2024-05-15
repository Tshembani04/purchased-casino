const express = require("express");
const router = express.Router();
const { getSmartContractData } = require("../../controllers/smartContract"); // Import controller

router.get("/Tshembani", async (req, res) => {
  try {
    const data = await getSmartContractData();
    console.log(`Fetched information from smart contract: ${data}`);
    res.json({ data }); // Send fetched data in response
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
