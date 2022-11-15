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
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });
};

initMoralis();

const getWalletbalance = async (address, network) => {
  const data = await Moralis.SolApi.account.getBalance({
    address,
    network,
  });

  return data.toJSON();
};

app.post("/getWalletbalance", async (req, res) => {
  const { address, network } = req.body;

  if (address && network) {
    const response = await getWalletbalance(address, network);
    res.status(200).json(response);
  } else {
    res.status(400).send({ error: "Missing Inputs" });
  }
});

const getTokenbalance = async (address, network) => {
  const data = await Moralis.SolApi.account.getSPL({
    address,
    network,
  });

  return data.toJSON();
};

app.post("/getTokenbalance", async (req, res) => {
  const { address, network } = req.body;

  if (address && network) {
    const response = await getTokenbalance(address, network);
    res.status(200).json(response);
  } else {
    res.status(400).send({ error: "Missing Inputs" });
  }
});

const getNfts = async (address, network) => {
  const data = await Moralis.SolApi.account.getNFTs({
    address,
    network,
  });

  return data.toJSON();
};

app.post("/getNfts", async (req, res) => {
  const { address, network } = req.body;

  if (address && network) {
    const response = await getNfts(address, network);
    res.status(200).json(response);
  } else {
    res.status(400).send({ error: "Missing Inputs" });
  }
});

const getPortfolio = async (address, network) => {
  const data = await Moralis.SolApi.account.getPortfolio({
    address,
    network,
  });

  return data.toJSON();
};

app.post("/getPortfolio", async (req, res) => {
  const { address, network } = req.body;

  if (address && network) {
    const response = await getPortfolio(address, network);
    res.status(200).json(response);
  } else {
    res.status(400).send({ error: "Missing Inputs" });
  }
});

const getNFTMetadata = async (address, network) => {
  const data = await Moralis.SolApi.nft.getNFTMetadata({
    address,
    network,
  });

  return data.toJSON();
};

app.post("/getNFTMetadata", async (req, res) => {
  const { address, network } = req.body;

  if (address && network) {
    const response = await getNFTMetadata(address, network);
    res.status(200).json(response);
  } else {
    res.status(400).send({ error: "Missing Inputs" });
  }
});

const getTokenPrice = async (address, network) => {
  const data = await Moralis.SolApi.token.getTokenPrice({
    address,
    network,
  });

  return data.toJSON();
};

app.post("/getTokenPrice", async (req, res) => {
  const { address, network } = req.body;
  if (address && network) {
    const response = await getTokenPrice(address, network);
    res.status(200).json(response);
  } else {
    res.status(400).send({ error: "Missing Inputs" });
  }
});
