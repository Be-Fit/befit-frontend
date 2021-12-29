import { Flex, FlexProps, Text, Box } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

interface IProps {
  flexProps?: FlexProps;
}

const Navigation: React.FC<IProps> = ({ flexProps }: IProps) => {
  return (
    <Flex 
      justifyContent="space-between"
      px={10}
      alignItems="center"
      height="11vh"
      py={15}
      width="100%"
      {...flexProps}
    >
      <Box>
        <Text fontSize="2xl">be-fit.</Text>
      </Box>
      <Flex width="40%" justifyContent="space-evenly">
        <Text fontSize="2xl">signup.</Text>
        <Text fontSize="2xl">login.</Text>
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};

export default Navigation;
