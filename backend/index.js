const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const port = 9000;

app.listen(port, () => {
  console.log(`App started on port http://localhost:${port} !!!`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hey, You are in my backend!!!");
});

const Moralis = require("moralis").default;
require("dotenv").config();

const initMoralis = async () => {
  try {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: e.message });
  }
};

initMoralis();

const getWalletbalance = async (address, network) => {
  const data = await Moralis.SolApi.account.getBalance({
    address,
    network,
  });

  return data.raw;
};

app.post("/getWalletbalance", async (req, res) => {
  const { address, network } = req.body;
  try {
    if (address && network) {
      const response = await getWalletbalance(address, network);
      res.status(200).json(response);
    } else {
      res.status(400).send({ error: "Missing Inputs" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: e.message });
  }
});

const getTokenbalance = async (address, network) => {
  const data = await Moralis.SolApi.account.getSPL({
    address,
    network,
  });

  return data.raw;
};

app.post("/getTokenbalance", async (req, res) => {
  const { address, network } = req.body;
  try {
    if (address && network) {
      const response = await getTokenbalance(address, network);
      res.status(200).json(response);
    } else {
      res.status(400).send({ error: "Missing Inputs" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: e.message });
  }
});

const getNfts = async (address, network) => {
  const data = await Moralis.SolApi.account.getNFTs({
    address,
    network,
  });

  return data.raw;
};

app.post("/getNfts", async (req, res) => {
  const { address, network } = req.body;
  try {
    if (address && network) {
      const response = await getNfts(address, network);
      res.status(200).json(response);
    } else {
      res.status(400).send({ error: "Missing Inputs" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: e.message });
  }
});

const getPortfolio = async (address, network) => {
  const data = await Moralis.SolApi.account.getPortfolio({
    address,
    network,
  });

  return data.raw;
};

app.post("/getPortfolio", async (req, res) => {
  const { address, network } = req.body;
  try {
    if (address && network) {
      const response = await getPortfolio(address, network);
      res.status(200).json(response);
    } else {
      res.status(400).send({ error: "Missing Inputs" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: e.message });
  }
});

const getNFTMetadata = async (address, network) => {
  const data = await Moralis.SolApi.nft.getNFTMetadata({
    address,
    network,
  });

  return data.raw;
};

app.post("/getNFTMetadata", async (req, res) => {
  const { address, network } = req.body;
  try {
    if (address && network) {
      const response = await getNFTMetadata(address, network);
      res.status(200).json(response);
    } else {
      res.status(400).send({ error: "Missing Inputs" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: e.message });
  }
});

const getTokenPrice = async (address, network) => {
  const data = await Moralis.SolApi.token.getTokenPrice({
    address,
    network,
  });

  return data.raw;
};

app.post("/getTokenPrice", async (req, res) => {
  const { address, network } = req.body;
  try {
    if (address && network) {
      const response = await getTokenPrice(address, network);
      res.status(200).json(response);
    } else {
      res.status(400).send({ error: "Missing Inputs" });
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: e.message });
  }
});
