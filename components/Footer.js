import React from 'react'
import { Flex, Image, Text } from "@chakra-ui/react"
const Footer = () => {
  return (
    <Flex gap={"5px"}>
        <Image src="/footlock.svg" alt="lock" />
        <Text>End-to-end Encryption</Text>
    </Flex>
  )
}

export default Footer