import "@rainbow-me/rainbowkit/styles.css";
import "../../rainbowkit.css";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
  // AvatarComponent,
} from "@rainbow-me/rainbowkit";
import { ledgerWallet } from "@rainbow-me/rainbowkit/wallets";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { extractChain } from "viem";

import config from "../../config";
import { BridgeIcon } from "../Icons";
import { Box } from "@chakra-ui/react";

const { chains, publicClient, webSocketPublicClient } = configureChains([...config.chains], [publicProvider()]);

const projectId = config.rainbowkit.projectId;

const { wallets } = getDefaultWallets({
  appName: config.branding.name,
  projectId,
  chains,
});

const demoAppInfo = {
  appName: config.branding.name,
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [ledgerWallet({ projectId, chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function EthereumProviders({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        locale="en"
        chains={chains}
        appInfo={demoAppInfo}
        avatar={CustomAvatar}
        modalSize="compact"
        theme={darkTheme({
          borderRadius: "small",
          fontStack: "system",
          overlayBlur: "none",
        })}
        coolMode
        // showRecentTransactions={true}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

// @ts-ignore
export const CustomAvatar /*: AvatarComponent*/ = ({ address, size }: { address?: string; size?: number }) => {
  return (
    <Box color="cryellow.400">
      <BridgeIcon width="74px" height="74px" />
    </Box>
  );
};

export const getChainById = (chainId: number) => {
  return extractChain({
    chains,
    id: chainId,
  });
};
