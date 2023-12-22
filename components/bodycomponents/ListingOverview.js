import React from "react";
import { Image } from "@chakra-ui/react";
import {
  Box,
  Text, 
  Flex,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

const ListingOverview = () => {
  return (
    <Box bgColor={"white"} w="475px" boxShadow={'md'} h="287px" border borderRadius={"16px"} padding={"16px"}>
      <Flex direction={"column"}>
        <Text fontWeight={600} fontSize={"20px"}>Listing Overview</Text>
        <SimpleGrid spacing={'8'} justifyContent={'space-between'}>
          <Flex justifyContent={'space-between'} paddingRight={'24px'}>
            <Flex gap={8} direction={'column'}>
              <Text>Most Viewed</Text>
              <Flex gap={10}>
                <Image src="/listingIcon.svg" alt="listingImg" />
                <Text fontWeight={600} fontSize={"20px"}>None</Text>
              </Flex>
            </Flex>
            <Flex gap={8} direction={'column'}>
              <Text>Most Shared</Text>
              <Flex gap={10}>
                <Image src="/listingIcon.svg" alt="listingImg" />
                <Text fontWeight={600} fontSize={"20px"}>None</Text>
              </Flex>
            </Flex>
          </Flex>
          <Container bgColor={'ghostwhite'} borderRadius={"24px"} w={'437px'} h={'109px'}>
            <Flex direction={"column"} padding={"10px"}>
              <Text>Most watchlisted</Text>
              <Flex direction={"row"} gap={'10px'}>
                <Image src="/listingIcon.svg" alt="listingImg" />
                <Text fontWeight={600} fontSize={"20px"}>None</Text>

                <Flex w={"189px"} h={"68px"} bgColor={'white'} borderRadius={"20px"} margin={2} padding={4}>
                  <Flex justifyContent={'space-between'}>
                    <Flex direction={'column'}>
                      <Text>0</Text>
                      <Text>Number of watchlists</Text>
                    </Flex>
                    <Image src="watchlistIcon.svg" alt="watchlist" w={15} h={30}/>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default ListingOverview;
