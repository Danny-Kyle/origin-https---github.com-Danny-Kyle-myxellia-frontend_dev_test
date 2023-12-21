import React from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";

const props = [
  {
    name: "Property",
    src: "",
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
    src: "",
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

const overview = () => {};

const Dashboard = () => {
  return (
    <Box>
      <Flex direction={"column"}>
        <Box>
          <Text display={"flex"} flexDir={"row"}>
            <Image src="/hand.svg" alt="hand" />
            Hi Ahmed
          </Text>
          <Text>Welcome to your Dashboard</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
