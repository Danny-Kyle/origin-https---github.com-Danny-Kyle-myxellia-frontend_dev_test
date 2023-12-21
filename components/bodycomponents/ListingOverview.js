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
    <Box>
      <Flex direction={"column"}>
        <Text>Listing Overview</Text>
        <Grid>
          <Flex>
            <Box>
              <Text>Most Viewed</Text>
              <br className="text-gray-950"/>
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
          <Container bgColor={"gray.600"}>
            <Flex>
              <Text>Most watchlisted</Text>
              <Flex>
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
