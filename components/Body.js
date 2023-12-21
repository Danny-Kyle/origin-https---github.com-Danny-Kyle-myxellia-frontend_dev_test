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
    <Box>
      <Flex>
        <Dashboard />
      </Flex>
      <Flex direction={'row'}>
        <ListingOverview />
        <BalanceMetrics />
        <SalesMetrics />
      </Flex>
    </Box>
  );
};

export default Body;
