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

const Majprops = [
  {
    name: "Property",
    src: "/propertyIcon.svg",
    items: [
      {
        name: "Total",
        number: 0,
      },
      {
        name: "Available",
        number: 0,
      },
      {
        name: "Sold Out",
        number: 0,
      },
    ],
  },
  {
    name: "Customers",
    src: "/customerIcon.svg",
    items: [
      {
        name: "Total",
        number: 0,
      },
      {
        name: "New",
        number: 0,
      },
      {
        name: "Active",
        number: 0,
      },
      {
        name: "Inactive",
        number: 0,
      },
    ],
  },
];

const Dashboard = () => {
  return (
    <Box>
      <Flex direction={"column"}>
        <Box>
          <Text display={"flex"} flexDir={"row"} fontWeight={600} fontSize={"20px"}>
            <Image src="/hand.svg" alt="hand" />
            Hi Ahmed
          </Text>
          <Text>Welcome to your Dashboard</Text>
        </Box>
        {Majprops.map((item) => (
          <Box key={item.id} w={"407px"} h={"157px"} borderRadius={"16px"} bgColor={"white"}>
            <Flex direction={"column"}>
              <Flex direction={"row"}>
                <Flex
                  direction={"row"}
                  w={"158px"}
                  h={"24px"}
                >
                  <Image src={item.src} alt={item.name} />
                  <Text>{item.name} Overview</Text>
                </Flex>
                <Spacer />
                <Box display={"flex"} flexDirection={"row"}>
                  <Text>View all</Text>
                  <Image src="/arrowright.svg" alt="arrow" h="18px" w="65px" />
                </Box>
              </Flex>
              <Flex>
              {item.items.map((item) => (
                <Stack key={item.id} display={"flex"} flexDirection={"row"}>
                  <Box h={"79px"} w={"117px"} borderRadius={"12px"} border>
                    <VStack>
                      <Text>{item.number}</Text>
                      <Text>{item.name}</Text>
                    </VStack>
                  </Box>
                </Stack>
              ))}
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Dashboard;
