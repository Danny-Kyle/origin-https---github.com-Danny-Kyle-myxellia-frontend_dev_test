"use client";

import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Header = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can perform any additional actions when the date changes
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex
      direction={"row"}
      justifyContent={"space-between"}
      paddingX={28}
      bg={"black"}
      w={"1366px"}
      h={"67px"}
    >
      <Flex>
        <Image src={"/logo.svg"} alt="logo" width={140} height={10} />
      </Flex>
      <Flex gap={12} justifyContent={"end"} alignItems={"center"}>
        <Image src={"/addIcon.svg"} alt="add" width={30} height={30} />
        <Button ref={btnRef} onClick={onOpen}>
          <Image
            src={"/calendarIcon.svg"}
            alt="calendar"
            width={30}
            height={30}
          />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size={'sm'}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bgColor={"white"}>
            <DrawerCloseButton />
            <DrawerHeader>Calendar</DrawerHeader>
            <DrawerBody>
              <div>
                <Calendar onChange={handleDateChange} value={selectedDate} />
                <p>Selected Date: {selectedDate.toDateString()}</p>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Image src={"/notification.svg"} alt="notif" width={30} height={30} />
        <Menu>
          <MenuButton as={Button}>
            <Flex gap={12} direction="row">
              <Image
                src="/userAvatar.svg"
                alt="user avatar"
                width={30}
                height={30}
              />
              <Text color={"white"}> Ahmed Ali</Text>
              <Image
                src={"/arrowRight.svg"}
                alt="arrow"
                width={10}
                height={10}
              />
            </Flex>
          </MenuButton>
          <MenuList bgColor={"white"} padding={12}>
            <MenuItem>Support Center</MenuItem>
            <MenuDivider />
            <MenuItem>Switch Account</MenuItem>
            <MenuDivider />
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
