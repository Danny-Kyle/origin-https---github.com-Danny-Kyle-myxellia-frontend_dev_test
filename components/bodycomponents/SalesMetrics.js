import { Image } from '@chakra-ui/react'
import { Box, Stack,Text, HStack, Spacer,Button,Flex, Container } from "@chakra-ui/react";

const SalesMetrics = () => {
  return (
    <Container w="350px" h="287px" padding={'20px'} boxShadow={'md'} bgColor={"white"} borderRadius={"16px"}>
        <Text className='text-green-600' fontWeight={600} fontSize={"20px"}>Top Selling</Text>
        <Box>
        <Flex direction={'row'}>
            <Text className='text-black'>N 0</Text>
            <Text className='text-gray-400'>.00</Text>
        </Flex>
        <p className='text-black text-sm mb-5' >Total Sold</p>
        </Box>

        <Box>
            <Flex >
                <Image src="/saleImg.svg" alt="sale"/>

                <Flex direction={"column"} marginLeft={8}>
                    <h2 className='font-bold mb-12'>None</h2>
                    <p className='font-semibold text-gray-500'>0</p>
                    <p className='font-semibold text-sm '>Whole Units Sold</p>
                </Flex>
            </Flex>
        </Box>

    </Container>
  )
}

export default SalesMetrics