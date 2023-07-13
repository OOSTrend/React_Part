import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
// import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import { OOSTLogo } from "components/icons/Icons";
export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <OOSTLogo h='200px' w='175px' my='32px' color={logoColor} />
      
      <HSeparator mb='40px' />
    </Flex>
  );
}

export default SidebarBrand;
