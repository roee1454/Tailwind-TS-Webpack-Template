import "./styles/index.css";
import axios from "axios";
import { v4 } from "uuid";

const API_KEY = "CG-HFgNR2dU6iXjsU3BzkBXWtsk";

interface CryptoCurrency {
    
}

async function fetchYahooStocksData() {
  const { data } = await axios.get("");
  return data;
}
