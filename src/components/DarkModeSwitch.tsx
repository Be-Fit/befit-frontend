import { useColorMode, Switch, IconButtonProps } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const DarkModeSwitch: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <IconButton
        {...props}
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </>
  );
};

export default DarkModeSwitch;
