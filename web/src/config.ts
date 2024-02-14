
import { localhost, goerli, mainnet } from "viem/chains"

import l1DojoBridge from "./abis/L1DojoBridge.json"
import l1Token from "./abis/Token.json"

import dojoToken from "./abis/dojo_bridge::dojo_token::dojo_token.json"
import dojoBridge from "./abis/dojo_bridge::dojo_bridge::dojo_bridge.json"

import { BridgeChains } from "./common/types"
import { mergeDeep } from "./common/utils"

const enableTestnets = import.meta.env.VITE_ENABLE_TESTNETS === "true"


const explorers = {
    [BridgeChains.Ethereum]: {
        [localhost.id]: "https://local.etherscan.io/",
        [goerli.id]: "https://goerli.etherscan.io/",
        [mainnet.id]: "https://etherscan.io/",
    },
    [BridgeChains.Starknet]: {
        [localhost.id]: "https://local.voyager.online/",
        [goerli.id]: "https://goerli.voyager.online/",
        [mainnet.id]: "https://voyager.online/",
    }
}

const bridge = {
    l1: {
        abi: l1DojoBridge.abi,
        tokenAbi: l1Token.abi,
        address: {
            [localhost.id]: "0xA2a4A401C8C1D6eD1ec03504018F4A1988635031",
            [goerli.id]: "0x9ab4C96dd119aD61D810F7Ce536128Cbf02e6DA1",
            [mainnet.id]: "0x",
        }

    },
    sn: {
        abi: dojoBridge.abi,
        tokenAbi: dojoToken.abi,
        address: {
            [localhost.id]: "0x2ff2f9994ba7e039f50190cb3b3dc538d9abf7201acbe5a6a7aff686dd40d89",
            [goerli.id]: "0x2ff2f9994ba7e039f50190cb3b3dc538d9abf7201acbe5a6a7aff686dd40d89",
            [mainnet.id]: "0x",
        }
    }
}


const localhostOverride = mergeDeep(localhost, {
    rpcUrls: {
        public: {
            webSocket: ["ws://127.0.0.1:8545"]
        }
    }
})

const goerliOverride = mergeDeep(goerli, {
    rpcUrls: {
        public: {
            webSocket: ["wss://ethereum-goerli.publicnode.com", "wss://goerli.gateway.tenderly.co"]
        }
    }
})

const mainnetOverride = mergeDeep(mainnet, {
    rpcUrls: {
        public: {
            webSocket: ["wss://ethereum.publicnode.com", "wss://mainnet.gateway.tenderly.co"]
        }
    }
})

const chains = enableTestnets ? [localhostOverride, goerliOverride, mainnetOverride] : [mainnetOverride]

const config = {
    branding: {
        name: "cart bridge",
        tokenName: "$TOKEN",
        logo: "/mark-dark.svg"
    },
    rainbowkit: {
        projectId: "YOUR_PROJECT_ID"
    },
    //
    explorers,
    //
    bridge,
    chains,

}




export default config;