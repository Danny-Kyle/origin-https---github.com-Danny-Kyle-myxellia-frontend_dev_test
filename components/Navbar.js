import { Box, Stack, HStack, Button } from "@chakra-ui/react";

const NavItems = [
  {
    name: "Dashboard",
    src: "",
  },
  {
    name: "Listings",
    src: "",
  },
  {
    name: "Users",
    src: "",
  },
  {
    name: "Account",
    src: "",
  },
  {
    name: "Request",
    src: "",
  },
  {
    name: "Settings",
    src: "",
  },
];

const SearchBar = () => {
  return (
    <Button _placeholder={"Search..... properties, customers here"}>
      <p>Searchimage</p>
    </Button>
  );
};

const Navbar = () => {
  console.log(NavItems);
  return (
    <Stack direction="row">
      {NavItems.map((item) => (
        <div className="flex flex-row gap-3" key={item.name}>
          <p>{item.name}</p>
          {/* <p>{item.src}</p> */}
        </div>
      ))}
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
