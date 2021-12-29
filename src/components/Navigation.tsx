import { useState } from "react";
import { Flex, FlexProps, Text, Box, IconButton } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";

interface IProps {
  flexProps?: FlexProps;
}

const Navigation: React.FC<IProps> = ({ flexProps }: IProps) => {
  const [menuToggle, setToggleMenu] = useState<boolean>(false);

  return (
    <>
      <Flex
        justifyContent="space-between"
        px={10}
        alignItems="center"
        height="11vh"
        py={15}
        width="100%"
        {...flexProps}
      >
        <IconButton
          onClick={() => setToggleMenu((prev) => !prev)}
          display={{ base: "block", md: "none" }}
          aria-label="Hamburger menu"
          icon={menuToggle ? <SmallCloseIcon /> : <HamburgerIcon />}
        />
        <Box>
          <Text fontSize="3xl">be-fit.</Text>
        </Box>
        <Flex
          display={{ base: "none", sm: "none", md: "flex" }}
          width="40%"
          justifyContent="space-evenly"
        >
          <Text fontSize="3xl">signup.</Text>
          <Text fontSize="3xl">login.</Text>
          <DarkModeSwitch aria-label="Switch mode" />
        </Flex>
      </Flex>
      <Flex width="100%" alignItems="center" justifyContent="center">
        {menuToggle ? (
          <Flex
            display={{ base: "block", md: "none" }}
            height="89vh"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Text mt={20} fontSize="2xl">
              signup.
            </Text>
            <Text mt={20} fontSize="2xl">
              login.
            </Text>
            <DarkModeSwitch aria-label="Switch mode" mt={20} />
          </Flex>
        ) : null}
      </Flex>
    </>
  );
};

export default Navigation;
