import { useEffect, useState } from "react";

import { Card, VStack, HStack, Heading, CardBody, Button, Box, Spinner } from "@chakra-ui/react";

import { useSteps } from "@chakra-ui/react";

import { Ethereum, Starknet, Swap, HistoryIcon, InformationIcon, BridgeIcon, QuestionIcon } from "./Icons";
import { useContractRead as useEthereumContractRead, useContractWrite as useEthereumContractWrite } from "wagmi";
import {
  useContractRead as useStarknetContractRead,
  useContractWrite as useStarknetContractWrite,
} from "@starknet-react/core";

import config from "../config";
import { parseEther, formatEther, Address } from "viem";
import { Contract, shortString, uint256 } from "starknet";
import { getChainById } from "./web3/EthereumProviders";
import { getStarknetChainIdFromEthereumChain } from "./web3/StarknetProviders";

import { Token } from "./bridge/Token";
import { BridgeStepper } from "./bridge/BridgeStepper";
import { BridgeHistory } from "./bridge/BridgeHistory";
import { BridgeConfirmModal } from "./bridge/BridgeConfirm";
import { TransactionCard } from "./bridge/TransactionCard";
import { BridgeDirection, BridgeChains, BridgeSide } from "../common/types";
import { getEthereumBridgeAddress, getStarknetBridgeAddress, sanitizeAmount } from "../common/utils";
import { BridgeAlert } from "./bridge/BridgeAlert";
import { BridgeDetails } from "./bridge/BridgeDetails";

import useProviders from "../hooks/useProviders";
import useHistory from "../hooks/useHistory";
import { Pill } from "./bridge/Pill";
import { BridgeFaq } from "./bridge/BridgeFaq";

// import { Debug } from "./bridge/Debug";

const Bridge = () => {
  const [direction, setDirection] = useState(BridgeDirection.FromEthereumToStarknet);

  const [tokenAmount, setTokenAmount] = useState<string>("");

  const [isBridgeDetailsOpen, setIsBridgeDetailsOpen] = useState(false);
  const [isBridgeFaqOpen, setIsBridgeFaqOpen] = useState(false);
  const [isBridgeHistoryOpen, setIsBridgeHistoryOpen] = useState(false);
  const [isBridgeConfirmModalOpen, setIsBridgeConfirmModalOpen] = useState(false);

  const [walletsConnected, setWalletsConnected] = useState(false);
  const [chainsMatching, setChainsMatching] = useState(false);
  const [isValidAmount, setIsValidAmount] = useState(false);
  const [isEnoughtAllowance, setIsEnoughtAllowance] = useState(false);

  const [starknetTokenAddress, setStarknetTokenAddress] = useState("");

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 3,
  });

  const { ethereumAccount, starknetAccount, ethereumChainId } = useProviders();

  const {
    ethereumEvents,
    starknetEvents,
    isLoading: isLoadingHistory,
    actionCount,
    pendingCount,
    refresh: refreshEvents,
  } = useHistory();

  //
  // EFFECT : chain change
  //

  useEffect(() => {
    const run = async () => {
      if (!starknetAccount.isConnected) return;
      const ethereumChain = getChainById(ethereumChainId);
      const starknetChainId = getStarknetChainIdFromEthereumChain(ethereumChain);

      if (ethereumAccount.isConnected && starknetAccount.isConnected) {
        // doesnt works for braavos ?
        // @ts-ignore
        if (window && window.starknet_argentX) {
          // @ts-ignore
          if (window.starknet_argentX.chainId !== starknetChainId) {
            // @ts-ignore
            await window.starknet_argentX.request({
              type: "wallet_switchStarknetChain",
              params: {
                chainId: starknetChainId,
              },
            });
          }
        }
      }
    };
    run();
  }, [ethereumChainId, ethereumAccount, ethereumAccount.isConnected, starknetAccount, starknetAccount.isConnected]);

  //
  // ETHEREUM READS
  //

  const { data: ethereumTokenAddress } = useEthereumContractRead({
    address: getEthereumBridgeAddress(ethereumChainId),
    abi: config.bridge.l1.abi,
    functionName: "l1Token",
  });

  const { data: ethereumTokenBalance, refetch: refetchEthereumTokenBalance } = useEthereumContractRead({
    address: ethereumTokenAddress as Address,
    abi: config.bridge.l1.tokenAbi,
    functionName: "balanceOf",
    args: [ethereumAccount.address],
    watch: true,
    enabled: ethereumAccount.isConnected,
  });

  const { data: ethereumTokenAllowance, refetch: refetchEthereumTokenAllowance } = useEthereumContractRead({
    address: ethereumTokenAddress as Address,
    abi: config.bridge.l1.tokenAbi,
    functionName: "allowance",
    args: [ethereumAccount.address, getEthereumBridgeAddress(ethereumChainId)],
    watch: true,
    enabled: ethereumAccount.isConnected,
  });

  //
  // ETHEREUM WRITE
  //

  const {
    data: ethereumApproveData,
    write: ethereumApprove,
    isLoading: isLoadingEthereumApprove,
    isSuccess: isSuccessEthereumApprove,
    isError: isErrorEthereumApprove,
    error: ethereumApproveError,
    reset: resetEthereumApprove,
  } = useEthereumContractWrite({
    address: ethereumTokenAddress as Address,
    abi: config.bridge.l1.tokenAbi,
    functionName: "approve",
    args: [getEthereumBridgeAddress(ethereumChainId), parseEther(sanitizeAmount(tokenAmount))],
  });

  const {
    data: ethereumBridgeDepositData,
    write: ethereumBridgeDeposit,
    isLoading: isLoadingEthereumBridgeDeposit,
    isSuccess: isSuccessEthereumBridgeDeposit,
    isError: isErrorEthereumBridgeDeposit,
    error: ethereumBridgeDepositError,
    reset: resetEthereumBridgeDeposit,
  } = useEthereumContractWrite({
    address: getEthereumBridgeAddress(ethereumChainId),
    abi: config.bridge.l1.abi,
    functionName: "deposit",
    //value: 0, // use 0 to test error
    value: 30_000n, // TODO: use amount from estimate ?
    args: [parseEther(sanitizeAmount(tokenAmount)), starknetAccount.address, 30_000n],
  });

  const {
    data: ethereumBridgeWithdrawData,
    write: ethereumBridgeWithdraw,
    isLoading: isLoadingEthereumBridgeWithdraw,
    isSuccess: isSuccessEthereumBridgeWithdraw,
    isError: isErrorEthereumBridgeWithdraw,
    error: ethereumBridgeWithdrawError,
    reset: resetEthereumBridgeWithdraw,
  } = useEthereumContractWrite({
    address: getEthereumBridgeAddress(ethereumChainId),
    abi: config.bridge.l1.abi,
    functionName: "withdraw",
  });

  //
  // STARKNET READ
  //

  const { data: starknetTokenAddressData } = useStarknetContractRead({
    address: getStarknetBridgeAddress(ethereumChainId),
    abi: config.bridge.sn.abi,
    functionName: "get_token",
  });

  const { data: starknetTokenBalance, refetch: refetchStarknetTokenBalance } = useStarknetContractRead({
    address: starknetTokenAddress as string,
    abi: config.bridge.sn.tokenAbi,
    functionName: "balance_of",
    args: [starknetAccount.address || "0x0"],
    watch: true,
    enabled: starknetAccount.isConnected,
  });

  //
  // STARKNET WRITE
  //

  const {
    data: starknetBridgeWithdrawData,
    writeAsync: starknetBridgeWithdraw,
    isPending: isPendingStarknetBridgeWithdraw,
    isSuccess: isSuccessStarknetBridgeWithdraw,
    isError: isErrorStarknetBridgeWithdraw,
    error: starknetBridgeWithdrawError,
    reset: resetStarknetBridgeWithdraw,
  } = useStarknetContractWrite({
    calls: [],
  });

  //
  // EFFECTS : TOKEN
  //

  // update ethereum TOKEN balance & allowance
  useEffect(() => {
    refetchEthereumTokenBalance();
    refetchEthereumTokenAllowance();
  }, [
    direction,
    ethereumChainId,
    ethereumTokenAddress,
    ethereumApproveData,
    ethereumBridgeDepositData,
    ethereumBridgeWithdrawData,
    refetchEthereumTokenBalance,
    refetchEthereumTokenAllowance,
  ]);

  // update starknet TOKEN balance
  useEffect(() => {
    const hexAddress = `0x${BigInt((starknetTokenAddressData as bigint) || 0).toString(16)}`;
    setStarknetTokenAddress(hexAddress);
    refetchStarknetTokenBalance();
  }, [
    direction,
    ethereumChainId,
    starknetTokenAddressData,
    starknetBridgeWithdrawData,
    ethereumBridgeDepositData,
    refetchStarknetTokenBalance,
  ]);

  //
  // Update : walletsConnected & chainsMatching
  //

  useEffect(() => {
    setWalletsConnected((ethereumAccount!.isConnected || false) && (starknetAccount!.isConnected || false));

    const ethereumChain = getChainById(ethereumChainId);
    const starknetChainId = getStarknetChainIdFromEthereumChain(ethereumChain);

    const currentStarknetChainId = shortString.decodeShortString(
      starknetAccount?.chainId?.toString() || "0x534e5f4c4f43414c" // SN_LOCAL
    );
    setChainsMatching(currentStarknetChainId === starknetChainId);
  }, [ethereumChainId, starknetAccount, starknetAccount?.isConnected, ethereumAccount, ethereumAccount?.isConnected]);

  //
  // Update : isValidAmount
  //

  useEffect(() => {
    const amountOverZero =
      direction === BridgeDirection.FromEthereumToStarknet
        ? Number(sanitizeAmount(tokenAmount)) > 0
        : Number(sanitizeAmount(tokenAmount)) > 0;

    const ethBalance = BigInt((ethereumTokenBalance as bigint) || 0n);
    const snBalance = BigInt((starknetTokenBalance as bigint) || 0n);
    const isEqualOrUnderBalance =
      direction === BridgeDirection.FromEthereumToStarknet
        ? Number(sanitizeAmount(tokenAmount)) <= Number(formatEther(ethBalance))
        : Number(sanitizeAmount(tokenAmount)) <= Number(formatEther(snBalance));
    starknetTokenBalance;

    setIsValidAmount(amountOverZero && isEqualOrUnderBalance);
  }, [ethereumChainId, tokenAmount, direction, ethereumTokenBalance, starknetTokenBalance]);

  //
  // Update : isEnoughtAllowance
  //

  useEffect(() => {
    const amount = parseEther(sanitizeAmount(tokenAmount));
    const allowance = direction === BridgeDirection.FromEthereumToStarknet ? (ethereumTokenAllowance as bigint) : 0n;

    const isEnought = allowance >= amount;
    setIsEnoughtAllowance(isEnought);
  }, [ethereumChainId, direction, tokenAmount, ethereumTokenAllowance]);

  //
  // Stepper
  //

  useEffect(() => {
    let newActiveStep = 0;
    // step 1
    if (walletsConnected && chainsMatching && activeStep <= 1) {
      newActiveStep = 1;
    }

    // step 2
    if (direction === BridgeDirection.FromEthereumToStarknet) {
      if (walletsConnected && chainsMatching && isValidAmount && isEnoughtAllowance && activeStep <= 2) {
        newActiveStep = 2;
      }
    }
    if (direction === BridgeDirection.FromStarknetToEthereum) {
      if (walletsConnected && chainsMatching && isSuccessStarknetBridgeWithdraw && activeStep <= 2) {
        newActiveStep = 2;
      }
    }

    // step 3
    if (direction === BridgeDirection.FromEthereumToStarknet) {
      if (isSuccessEthereumBridgeDeposit && ethereumBridgeDepositData && activeStep <= 3) {
        newActiveStep = 3;
      }
    }

    if (direction === BridgeDirection.FromStarknetToEthereum) {
      if (isSuccessStarknetBridgeWithdraw && starknetBridgeWithdrawData && activeStep <= 3) {
        newActiveStep = 2; // step 3 is withdraw on eth and happen hours after
      }
    }

    setActiveStep(newActiveStep);
  }, [
    direction,
    ethereumChainId,
    walletsConnected,
    chainsMatching,
    isValidAmount,
    isEnoughtAllowance,
    isSuccessStarknetBridgeWithdraw,
    isSuccessEthereumBridgeDeposit,
    ethereumBridgeDepositData,
    starknetAccount.chainId,
    activeStep,
    setActiveStep,
  ]);

  useEffect(() => {
    refetchEthereumTokenBalance();
    refetchEthereumTokenAllowance();
    refetchStarknetTokenBalance();
    setTokenAmount("");
  }, [
    ethereumChainId,
    starknetAccount.chainId,
    isSuccessEthereumBridgeDeposit,
    isSuccessStarknetBridgeWithdraw,
    direction,
    ethereumBridgeDepositData,
    refetchEthereumTokenAllowance,
    refetchEthereumTokenBalance,
    refetchStarknetTokenBalance,
    setActiveStep,
    starknetBridgeWithdrawData,
  ]);

  //
  // Event Handlers
  //

  const toggleDirection = () => {
    if (direction === BridgeDirection.FromEthereumToStarknet) {
      setDirection(BridgeDirection.FromStarknetToEthereum);
    } else {
      setDirection(BridgeDirection.FromEthereumToStarknet);
    }
    setTokenAmount("");
  };

  const onApprove = async () => {
    if (direction === BridgeDirection.FromEthereumToStarknet) {
      await ethereumApprove();
    }

    if (direction === BridgeDirection.FromStarknetToEthereum) {
      // no approve on starknet, token get burnt by bridge
    }
  };

  const onBridge = async () => {
    if (direction === BridgeDirection.FromEthereumToStarknet) {
      await ethereumBridgeDeposit();
    }

    if (direction === BridgeDirection.FromStarknetToEthereum) {
      const starknetBridgeContract = new Contract(config.bridge.sn.abi, getStarknetBridgeAddress(ethereumChainId));

      await starknetBridgeWithdraw({
        calls: starknetBridgeContract
          ? [
              starknetBridgeContract.populateTransaction["initiate_withdrawal"]!(
                ethereumAccount.address || 0,
                uint256.bnToUint256(parseEther(sanitizeAmount(tokenAmount))).low,
                uint256.bnToUint256(parseEther(sanitizeAmount(tokenAmount))).high
              ),
            ]
          : [],
      });

      setTimeout(() => refreshEvents(), 5_000);
    }
  };

  return (
    <>
      {/* <Debug /> */}

      {actionCount > 0 && (
        <BridgeAlert
          position="absolute"
          top="60px"
          left="0"
          right="0"
          message={`You have ${actionCount} transaction${actionCount > 1 ? "s" : ""} that's ready to be finalized`}
        />
      )}

      <VStack w="full" alignItems={"center"} justifyContent={"center"} mt={6} gap={6}>
        <HStack w="full" maxW="560px" justifyContent="space-between" position="relative">
          <HStack>
            <HStack color="text.primary" bgColor="bg.light" gap={3} p={2} px={4} borderRadius={8}>
              <BridgeIcon width="20px" height="20px" />
              <Heading fontSize="24px"> {config.branding.tokenName}</Heading>
            </HStack>
            <Button
              onClick={() => setIsBridgeDetailsOpen(!isBridgeDetailsOpen)}
              border="solid 0px !important"
              title="Infos"
            >
              <InformationIcon />
            </Button>

            <Button onClick={() => setIsBridgeFaqOpen(!isBridgeFaqOpen)} border="solid 0px !important" title="Faq">
              <QuestionIcon />
            </Button>
          </HStack>

          <HStack>
            <Button
              onClick={() => setIsBridgeHistoryOpen(!isBridgeHistoryOpen)}
              border="solid 0px !important"
              title="History"
              position="relative"
            >
              <HStack position="absolute" right="40px" top="-10px">
                {actionCount > 0 && <Pill>{actionCount + pendingCount}</Pill>}
              </HStack>

              {isLoadingHistory ? <Spinner colorScheme="cryellow" /> : <HistoryIcon width="16px" height="16px" />}
            </Button>
          </HStack>
        </HStack>

        <Card w="full" maxW="560px" minH="480px" bg="bg.light" mx="auto" position={"relative"}>
          <CardBody display="flex" alignItems="center">
            <VStack w="full">
              <VStack
                w="full"
                gap={6}
                mb={6}
                justifyContent="center"
                flexDirection={direction === BridgeDirection.FromEthereumToStarknet ? "column" : "column-reverse"}
              >
                <Token
                  bridgeSide={direction === BridgeDirection.FromEthereumToStarknet ? BridgeSide.From : BridgeSide.To}
                  chainIcon={<Ethereum width="32px" height="32px" colored={true} />}
                  bridgeChain={BridgeChains.Ethereum}
                  tokenBalance={ethereumTokenBalance as bigint}
                  amount={tokenAmount}
                  setAmount={setTokenAmount}
                  isConnected={
                    direction === BridgeDirection.FromEthereumToStarknet
                      ? ethereumAccount.isConnected
                      : starknetAccount.isConnected
                  }
                />

                <Box
                  onClick={toggleDirection}
                  cursor={"pointer"}
                  transform={direction ? "rotate(0deg)" : "rotate(180deg)"}
                  transition={"0.2s"}
                >
                  <Swap color="neon.200" />
                </Box>

                <Token
                  bridgeSide={direction === BridgeDirection.FromEthereumToStarknet ? BridgeSide.To : BridgeSide.From}
                  chainIcon={<Starknet width="32px" height="32px" colored={true} />}
                  bridgeChain={BridgeChains.Starknet}
                  tokenBalance={starknetTokenBalance as bigint}
                  amount={tokenAmount}
                  setAmount={setTokenAmount}
                  isConnected={
                    direction === BridgeDirection.FromEthereumToStarknet
                      ? starknetAccount.isConnected
                      : ethereumAccount.isConnected
                  }
                />
              </VStack>
              <VStack w="full">
                {!(walletsConnected && isValidAmount && chainsMatching) && !isSuccessEthereumBridgeDeposit && (
                  <Button w="full" variant="primary" isDisabled={true}>
                    <>
                      {!walletsConnected && "CONNECT WALLETS"}
                      {walletsConnected && !chainsMatching && "CHAINS NETWORKS DON'T MATCH"}
                      {walletsConnected && chainsMatching && !isValidAmount && "INVALID AMOUNT"}
                    </>
                  </Button>
                )}

                {direction === BridgeDirection.FromEthereumToStarknet &&
                  walletsConnected &&
                  chainsMatching &&
                  isValidAmount &&
                  !isEnoughtAllowance && (
                    <Button
                      w="full"
                      variant="primary"
                      isDisabled={!(walletsConnected && isValidAmount)}
                      isLoading={isLoadingEthereumApprove}
                      onClick={onApprove}
                    >
                      APPROVE
                    </Button>
                  )}

                {walletsConnected &&
                  chainsMatching &&
                  isValidAmount &&
                  ((direction === BridgeDirection.FromEthereumToStarknet && isEnoughtAllowance) ||
                    direction === BridgeDirection.FromStarknetToEthereum) && (
                    <Button
                      w="full"
                      variant="primary"
                      isLoading={isLoadingEthereumBridgeDeposit}
                      onClick={() => {
                        setIsBridgeConfirmModalOpen(true);
                      }}
                    >
                      BRIDGE
                    </Button>
                  )}
              </VStack>
            </VStack>
          </CardBody>
        </Card>

        {(isLoadingEthereumApprove || isErrorEthereumApprove || ethereumApproveData?.hash) && (
          <TransactionCard
            title="Approve Ethereum Bridge"
            fromChain={BridgeChains.Ethereum}
            hash={ethereumApproveData?.hash}
            isLoading={isLoadingEthereumApprove}
            isSuccess={isSuccessEthereumApprove}
            isError={isErrorEthereumApprove}
            error={ethereumApproveError}
            reset={resetEthereumApprove}
            refreshEvents={() => {}}
          />
        )}

        {(isLoadingEthereumBridgeDeposit || isErrorEthereumBridgeDeposit || ethereumBridgeDepositData?.hash) && (
          <TransactionCard
            title="Bridge to Starknet"
            fromChain={BridgeChains.Ethereum}
            hash={ethereumBridgeDepositData?.hash}
            isLoading={isLoadingEthereumBridgeDeposit}
            isSuccess={isSuccessEthereumBridgeDeposit}
            isError={isErrorEthereumBridgeDeposit}
            error={ethereumBridgeDepositError}
            reset={resetEthereumBridgeDeposit}
            refreshEvents={refreshEvents}
          />
        )}

        {(isLoadingEthereumBridgeWithdraw || isErrorEthereumBridgeWithdraw || ethereumBridgeWithdrawData?.hash) && (
          <TransactionCard
            title="Withdraw from Ethereum Bridge"
            fromChain={BridgeChains.Ethereum}
            hash={ethereumBridgeWithdrawData?.hash}
            isLoading={isLoadingEthereumBridgeWithdraw}
            isSuccess={isSuccessEthereumBridgeWithdraw}
            isError={isErrorEthereumBridgeWithdraw}
            error={ethereumBridgeWithdrawError}
            reset={resetEthereumBridgeWithdraw}
            refreshEvents={refreshEvents}
          />
        )}

        {(isErrorStarknetBridgeWithdraw ||
          starknetBridgeWithdrawData?.transaction_hash ||
          isPendingStarknetBridgeWithdraw) && (
          <TransactionCard
            title="Bridge to Ethereum"
            fromChain={BridgeChains.Starknet}
            hash={starknetBridgeWithdrawData?.transaction_hash}
            isLoading={isPendingStarknetBridgeWithdraw}
            isSuccess={isSuccessStarknetBridgeWithdraw}
            isError={isErrorStarknetBridgeWithdraw}
            error={starknetBridgeWithdrawError}
            reset={resetStarknetBridgeWithdraw}
            refreshEvents={refreshEvents}
          />
        )}

        <BridgeHistory
          withdraw={ethereumBridgeWithdraw}
          onClose={() => setIsBridgeHistoryOpen(false)}
          ethereumEvents={ethereumEvents}
          starknetEvents={starknetEvents}
          isLoading={isLoadingHistory}
          actionCount={actionCount}
          pendingCount={pendingCount}
          isOpen={isBridgeHistoryOpen}
        />

        <BridgeDetails
          ethereumBridge={getEthereumBridgeAddress(ethereumChainId)}
          ethereumToken={ethereumTokenAddress as string}
          starknetBridge={getStarknetBridgeAddress(ethereumChainId)}
          starknetToken={starknetTokenAddress as string}
          onClose={() => setIsBridgeDetailsOpen(false)}
          isOpen={isBridgeDetailsOpen}
        />

        <BridgeFaq onClose={() => setIsBridgeFaqOpen(false)} isOpen={isBridgeFaqOpen} />

        <BridgeStepper direction={direction} activeStep={activeStep}></BridgeStepper>

        <BridgeConfirmModal
          direction={direction}
          amount={tokenAmount}
          starknetAccount={starknetAccount}
          ethereumAccount={ethereumAccount}
          isOpen={isBridgeConfirmModalOpen}
          onClose={() => setIsBridgeConfirmModalOpen(false)}
          onConfirm={onBridge}
        />
      </VStack>
    </>
  );
};

export default Bridge;
