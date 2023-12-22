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
      boxShadow={'md'}
      gap={12}
    >
      <Flex direction={"row"} justifyContent={"space-between"} >
        <Flex direction={"column"} >
          <Flex direction={"row"}>
            <Text fontWeight={600} fontSize={"20px"} className="text-black">N 0</Text>
            <Text fontWeight={600} fontSize={"20px"} className="text-gray-400">.00</Text>
          </Flex>
          <Text className="text-black text-sm" marginBottom={12}>Total Outstanding Balance</Text>
        </Flex>
        <Flex direction={"row"}>
          <Text>View all</Text>
          <Image src="/arrowright.svg" alt="arrow" h="18px" w="65px" />
        </Flex>
      </Flex>

      <Box>
        <Flex>
          <Image src="/saleImg.svg" alt="sale" />

          <Flex direction={"column"} marginLeft={10}>
            <Text className="font-bold mb-6">None</Text>
            
            <Flex direction={"column"}>
            <Text className="font-semibold text-red-500">N0.00</Text>
            <Text className="font-semibold text-sm mb-7">Outstanding Balance</Text>
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
