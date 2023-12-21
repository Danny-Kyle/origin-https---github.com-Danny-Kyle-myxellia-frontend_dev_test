import React from "react";
import { Dashboard, SalesMetrics, ListingOverview, BalanceMetrics } from "./bodycomponents";
import {
  Box,
  Stack,
  Text,
  HStack,
  Spacer,
  Button,
  Flex,
  Container,
} from "@chakra-ui/react";

const Body = () => {
  return (
    <Box h={"750px"} w={"1360px"} paddingY={"20px"} paddingX={"40px"}>
      <Flex>
        <Dashboard />
      </Flex>
      <Flex direction={'row'} marginY={"14px"} gap={"12px"} justifyContent={"space-between"}>
        <ListingOverview />
        <BalanceMetrics />
        <SalesMetrics />
      </Flex>
    </Box>
  );
};

export default Body;
