import { Flex, Stack, Box,Input } from "@chakra-ui/react";
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
    <Box bgColor={'ghostwhite'} borderRadius={"12px"} width={"319px"} height={"43px"} margin={"8px"}>
      <Flex paddingX={"16px"} paddingY={"10px"} gap={"10px"} justifyContent={'space-between'}>
        <Input placeholder="Search..... properties, customers here" size='lg' variant='unstyled' width={280} bgColor={'ghostwhite'} border={'ghostwhite'}/>
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
