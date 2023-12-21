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
  Grid,
} from "@chakra-ui/react";

const ListingOverview = () => {
  return (
    <Box bgColor={"white"} w="475px" h="287px" border borderRadius={"16px"} padding={"10px"}>
      <Flex direction={"column"}>
        <Text fontWeight={600} fontSize={"20px"}>Listing Overview</Text>
        <Grid>
          <Flex>
            <Box>
              <Text>Most Viewed</Text>
              <Flex>
                <Image src="/listingIcon.svg" alt="listingImg" />
                <Text>None</Text>
              </Flex>
            </Box>
            <Box>
              <Text>Most Shared</Text>
              <Flex>
                <Image src="/listingIcon.svg" alt="listingImg" />
                <Text>None</Text>
              </Flex>
            </Box>
          </Flex>
          <Container bgColor={"gray"}>
            <Flex direction={"column"} padding={"30px"}>
              <Text>Most watchlisted</Text>
              <Flex direction={"row"}>
                <Image src="/listingIcon.svg" alt="listingImg" />
                <Text>None</Text>

                <Box w={"189px"} h={"68px"}>
                  <Flex>
                    <Flex>
                      <Text>0</Text>
                      <Text>Number of watchlists</Text>
                    </Flex>
                    <Image src="watchlistIcon.svg" alt="watchlist" />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Container>
        </Grid>
      </Flex>
    </Box>
  );
};

export default ListingOverview;
