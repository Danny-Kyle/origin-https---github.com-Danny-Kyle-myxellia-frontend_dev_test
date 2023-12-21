import { Flex, Stack, Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const NavItems = [
  {
    name: "Dashboard",
    src: "/dashIcon.svg",
  },
  {
    name: "Listings",
    src: "/location.svg",
  },
  {
    name: "Users",
    src: "/user.svg",
  },
  {
    name: "Account",
    src: "/account.svg",
  },
  {
    name: "Request",
    src: "/request.svg",
  },
  {
    name: "Settings",
    src: "/settings.svg",
  },
];

const SearchBar = () => {
  return (
    <Box bgColor={"gray"} borderRadius={"12px"} margin={"8px"}>
      <Flex paddingX={"16px"} paddingY={"10px"} gap={"10px"}>
        <Text>{"Search..... properties, customers here"} </Text>
        <Image src="searchIcon.svg" alt="search" />
      </Flex>
    </Box>
  );
};

const Navbar = () => {
  return (
    <Stack
      direction="row"
      bgColor={"white"}
      w={"1366px"}
      h={"67px"}
      paddingX={"48px"}
      justifyContent={"space-between"}
    >
      {NavItems.map((item) => (
        <div className="flex flex-row gap-3 items-center justify-between" key={item.name}>
          <Image src={item.src} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
