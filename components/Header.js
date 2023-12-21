import {
  Spacer,
  Flex,
  HStack,
  Button,
  Stack,
  Text,
  useBoolean,
  Drawer,
} from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  // const [drawer, setDrawer] = useBoolean()
  return (
    <Stack
      display={"flex"}
      flexDirection="row"
      bg="black"
      w="1366px"
      h="82px"
      alignItems={"center"}
    >
      <Flex
        color="white"
        direction="row"
        justify={"space-between"}
        padding={"64px"}
        alignItems={"center"}
        gap={"50px"}
      >
        <Image src="/logo.svg" alt="logo" width={165} height={10} />
        <Flex gap={"40px"}>
          <HStack display={"flex"} flexDir={"row"} gap={"40px"}>
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
          <Flex
            width={50}
            height={45}
            color="white"
            direction={"row"}
            gap={"4px"}
          >
            <Image src="/userAvatar.svg" alt="user" width={165} height={10} />
          </Flex>
        </Flex>

        <Text>Ahmed Ali</Text>
      </Flex>

      {/* {drawer ? <Drawer></Drawer> : null} */}
    </Stack>
  );
};

export default Header;
