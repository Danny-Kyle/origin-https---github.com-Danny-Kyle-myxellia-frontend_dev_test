import React from "react";
import {
  Flex,
  Text,
  Image,
  Box,
  SimpleGrid,
  VStack,
  Spacer,
  Divider,
} from "@chakra-ui/react";

const SalesOverview = () => {
  return (
    <Box
      bgColor={"white"}
      boxShadow={"md"}
      w={"856px"}
      h={"325px"}
      border={"black"}
      borderRadius={"16px"}
      padding={"20px"}
    >
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Text fontWeight={600} fontSize={"20px"}>
            Sales Overview
          </Text>
          <Text>Showing overview Jan 2022 - Sep 2022</Text>
        </Flex>
        <Box
          w={"177px"}
          h={"46px"}
          borderRadius={"12px"}
          bgColor={"transparent"}
          border={"solid"}
          borderColor={"black"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          View Transactions
        </Box>
      </Flex>
      <Flex justifyContent={"end"} gap={16} paddingRight={16}>
        <Text>1 Week</Text>
        <Text>1 Month</Text>
        <Text>1 Year</Text>
      </Flex>
      <Divider />
      <Flex>
        <Flex></Flex>
        <Flex>
          <SimpleGrid columns={2} spacing={8}>
          <Box
            w={"189px"}
            h={"73px"}
            borderRadius={"12px"}
            bgColor={"transparent"}
            border={"solid"}
            borderColor={"black"}
            display={"flex"}
            padding={8}
          >
            <Flex direction={'column'} gap={6}>
              <Text color={'blue'} fontWeight={600}>N0.00</Text>
              <Flex direction={'row'} gap={12}>
                <Text>Balance</Text>
                <Text>0%</Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            w={"189px"}
            h={"73px"}
            borderRadius={"12px"}
            bgColor={"transparent"}
            border={"solid"}
            borderColor={"black"}
            display={"flex"}
            padding={8}
          >
            <Flex direction={'column'} gap={6}>
              <Text color={'greenyellow'} fontWeight={600}>N0.00</Text>
              <Flex direction={'row'} gap={12}>
                <Text>Balance</Text>
                <Text>0%</Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            w={"189px"}
            h={"73px"}
            borderRadius={"12px"}
            bgColor={"transparent"}
            border={"solid"}
            borderColor={"black"}
            display={"flex"}
            padding={8}
          >
            <Flex direction={'column'} gap={6}>
              <Text color={'black'} fontWeight={600}>N0.00</Text>
              <Flex direction={'row'} gap={12}>
                <Text>Balance</Text>
                <Text>0%</Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            w={"189px"}
            h={"73px"}
            borderRadius={"12px"}
            bgColor={"transparent"}
            border={"solid"}
            borderColor={"black"}
            display={"flex"}
            padding={8}
          >
            <Flex direction={'column'} gap={6}>
              <Text color={'tomato'} fontWeight={600}>N0.00</Text>
              <Flex direction={'row'} gap={12}>
                <Text>Balance</Text>
                <Text>0%</Text>
              </Flex>
            </Flex>
          </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SalesOverview;
