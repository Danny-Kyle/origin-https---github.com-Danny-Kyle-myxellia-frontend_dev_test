import React from "react";
import { Image } from "@chakra-ui/react";
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

const BalanceMetrics = () => {
  return (
    <Container
      w="350px"
      h="287px"
      padding={"20px"}
      bgColor={"white"}
      borderRadius={"16px"}
    >
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Flex direction={"row"}>
            <Text className="text-black">N 0</Text>
            <Text className="text-gray-400">.00</Text>
          </Flex>
          <Text className="text-black text-sm">Total Outstanding Balance</Text>
        </Flex>
        <Box display={"flex"} flexDirection={"row"}>
          <Text>View all</Text>
          <Image src="/arrowright.svg" alt="arrow" h="18px" w="65px" />
        </Box>
      </Flex>

      <Box>
        <Flex>
          <Image src="/saleImg.svg" alt="sale" />

          <Flex direction={"column"}>
            <Text className="font-bold ">None</Text>
            
            <Flex direction={"column"}>
            <Text className="font-semibold text-red-500">N0.00</Text>
            <Text className="font-semibold text-sm ">Outstanding Balance</Text>
            </Flex>

            <Flex direction={"row"} justifyContent={"end"}>
              <Text>1/5</Text>
              <Image src="/enclosedArrowLeft.svg" alt="arrow left"/>
              <Image src="/enclosedArrowRight.svg" alt="arrow right"/>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default BalanceMetrics;
