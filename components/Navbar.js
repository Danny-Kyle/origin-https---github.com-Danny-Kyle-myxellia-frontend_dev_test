import { Box, Stack, HStack, Button } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

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
    <Button placeholder={"Search..... properties, customers here"}>
      <p>Searchimage</p>
    </Button>
  );
};

const Navbar = () => {
  return (
    <Stack direction="row">
      {NavItems.map((item) => (
        <div className="flex flex-row gap-3" key={item.name}>
          <Image src={item.src} alt={item.name}/>
          <p>{item.name}</p>
        </div>
      ))}
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
