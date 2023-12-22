import React from 'react'
import {
  Flex,
  Text,
  Image,
  Box,
  Stack,
  VStack,
  Spacer,
} from "@chakra-ui/react";

const SalesOverview = () => {
  return (
    <Box bgColor={"white"} boxShadow={'md'} w={"856px"} h={"325px"} border={"black"} borderRadius={"16px"} padding={"20px"}>
      <Flex direction={'row'} justifyContent={"space-between"}>
      <Flex direction={"column"}>
        <Text fontWeight={600} fontSize={"20px"}>Sales Overview</Text>
        <Text>Showing overview Jan 2022 - Sep 2022</Text>
      </Flex>
      <Box border w={'177px'} h={'46px'} borderRadius={"12px"} bgColor={'ghostwhite'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        View Transactions
      </Box>
      </Flex>
      <Flex justifyContent={'end'} gap={16} paddingRight={16}>
        <Text>1 Week</Text>
        <Text>1 Month</Text>
        <Text>1 Year</Text>
      </Flex>
    </Box>
  )
}

export default SalesOverview