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
            {Majprops.map((item) => (
              <Box
                key={item.id}
                w={"407px"}
                h={"157px"}
                paddingX={'24px'}
                paddingY={'16px'}
                borderRadius={"16px"}
                bgColor={"white"}
                boxShadow={'md'}
              >
                <Flex direction={"column"}>
                  <Flex direction={"row"}>
                    <Flex direction={"row"} w={"158px"} h={"24px"} gap={8}>
                      <Image src={item.src} alt={item.name} width={24} height={24}/>
                      <Text fontSize={'smaller'}>{item.name} Overview</Text>
                    </Flex>
                    <Spacer />
                    <Box display={"flex"} flexDirection={"row"}>
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
                    {item.items.map((item) => (
                      <Stack
                        key={item.id}
                        display={"flex"}
                        flexDirection={"row"}
                      >
                        <Box
                          h={"49px"}
                          w={"87px"}
                          borderRadius={"12px"}
                          border
                        >
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
