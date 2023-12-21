import { Box, Spacer, Flex, HStack, Button, useBoolean, Drawer } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  // const [drawer, setDrawer] = useBoolean()
  return (
    <Flex direction="row" bg="black" w="1440px" h="149px" mx="auto">
      <Box
        color="white"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        padding={24}
      >
        <Box>
          <Image src="/logo.svg" alt="logo" width={165} height={10} />
        </Box>
        <Spacer />
        <Box>
          <HStack display={"flex"} flexDir={"row"} gap={4}>
            <Button>
              <Image src="/addIcon.svg" alt="add" width={36} height={10} />
            </Button>
            <Button>
              <Image src="/calendarIcon.svg" alt="add" width={36} height={10} />
            </Button>
            <Button>
              <Image src="/notification.svg" alt="add" width={36} height={10} />
            </Button>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <HStack w="80px" h="40px" color="white" display="flex" flexDir="row">
            <Image src="/userAvatar.svg" alt="user" width={165} height={10} />
            <p>Ahmed Ali</p>
          </HStack>
        </Box>
      </Box>

      {/* {drawer ? <Drawer></Drawer> : null} */}
    </Flex>
  );
};

export default Header;
