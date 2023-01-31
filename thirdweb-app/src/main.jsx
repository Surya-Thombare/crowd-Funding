import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <App />
    </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);
