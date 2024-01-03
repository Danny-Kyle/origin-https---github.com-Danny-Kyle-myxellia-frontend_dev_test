"use client";

import React from "react";
import {
  Flex,
  Text,
  Image,
  Box,
  Stack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import SalesOverview from "./SalesOverview";

const Dashboard = () => {
  return (
    <Box>
      <Flex direction={"column"} gap={16}>
        <Box>
          <Text
            display={"flex"}
            flexDir={"row"}
            fontWeight={600}
            fontSize={"20px"}
          >
            <Image src="/hand.svg" alt="hand" />
            Hi Ahmed
          </Text>
          <Text>Welcome to your Dashboard</Text>
        </Box>
        <Flex direction={"row"} gap={16}>
          <SalesOverview />
          <Flex direction={"column"} gap={12}>
            <Box
              w={"407px"}
              h={"157px"}
              paddingX={"24px"}
              paddingY={"16px"}
              borderRadius={"16px"}
              bgColor={"white"}
              boxShadow={"md"}
            >
              <Flex direction={"column"}>
                <Flex direction={"row"}>
                  <Flex direction={"row"} w={"158px"} h={"24px"} gap={8}>
                    <Image
                      src={"/propertyIcon.svg"}
                      alt={"property"}
                      width={24}
                      height={24}
                    />
                    <Text fontSize={"smaller"}>Property Overview</Text>
                  </Flex>
                  <Spacer />
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    cursor={"pointer"}
                  >
                    <Text>View all</Text>
                    <Image
                      src="/arrowright.svg"
                      alt="arrow"
                      h="18px"
                      w="65px"
                    />
                  </Box>
                </Flex>
                <Flex marginTop={22}>
                  <Box
                    h={"49px"}
                    w={"87px"}
                    borderRadius={"12px"}
                    border={"solid"}
                    marginX={3}
                  >
                    <VStack>
                      <Text>0</Text>
                      <Text>Total</Text>
                    </VStack>
                  </Box>
                  <Box
                    h={"49px"}
                    w={"87px"}
                    borderRadius={"12px"}
                    border={"solid"}
                    marginX={3}
                  >
                    <VStack>
                      <Text>0</Text>
                      <Text>Available</Text>
                    </VStack>
                  </Box>
                  <Box
                    h={"49px"}
                    w={"87px"}
                    borderRadius={"12px"}
                    border={"solid"}
                  >
                    <VStack>
                      <Text>0</Text>
                      <Text>Sold Out</Text>
                    </VStack>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            



            <Box
              w={"407px"}
              h={"157px"}
              paddingX={"24px"}
              paddingY={"16px"}
              borderRadius={"16px"}
              bgColor={"white"}
              boxShadow={"md"}
            >
              <Flex direction={"column"}>
                <Flex direction={"row"}>
                  <Flex direction={"row"} w={"158px"} h={"24px"} gap={8}>
                    <Image
                      src={"/propertyIcon.svg"}
                      alt={"property"}
                      width={24}
                      height={24}
                    />
                    <Text fontSize={"smaller"}>Customer Overview</Text>
                  </Flex>
                  <Spacer />
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    cursor={"pointer"}
                  >
                    <Text>View all</Text>
                    <Image
                      src="/arrowright.svg"
                      alt="arrow"
                      h="18px"
                      w="65px"
                    />
                  </Box>
                </Flex>
                <Flex marginTop={22}>
                  <Box
                    h={"49px"}
                    w={"87px"}
                    borderRadius={"12px"}
                    border={"solid"}
                    marginX={3}
                  >
                    <VStack>
                      <Text>0</Text>
                      <Text>Total</Text>
                    </VStack>
                  </Box>
                  <Box
                    h={"49px"}
                    w={"87px"}
                    borderRadius={"12px"}
                    border={"solid"}
                    marginX={3}
                  >
                    <VStack>
                      <Text>0</Text>
                      <Text>Available</Text>
                    </VStack>
                  </Box>
                  <Box
                    h={"49px"}
                    w={"87px"}
                    borderRadius={"12px"}
                    border={"solid"}
                    marginX={3}
                  >
                    <VStack>
                      <Text>0</Text>
                      <Text>Available</Text>
                    </VStack>
                  </Box>
                  <Box
                    h={"49px"}
                    w={"87px"}
                    borderRadius={"12px"}
                    border={"solid"}
                  >
                    <VStack>
                      <Text>0</Text>
                      <Text>Sold Out</Text>
                    </VStack>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
