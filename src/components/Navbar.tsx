"use client";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  chakra,
  CircularProgress,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SiTheregister } from "react-icons/si";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { JSX } from "react";

const RegisterIcon = chakra(SiTheregister);

interface Props {
  children: React.ReactNode;
  href: string;
}

const NavLink = (props: Props) => {
  const { children, href } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [{ data, fetching }] = useMeQuery({
    pause: typeof window === "undefined",
  });
  const [{ fetching: loggingOut }, logout] = useLogoutMutation();

  if (fetching) {
    <CircularProgress isIndeterminate color="green.300" />;
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RegisterIcon size={44} />

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
            {data?.me?.id ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    name={`${data.me.firstName} ${data.me.lastName}`}
                    src={""}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"xl"}
                      name={`${data.me.firstName} ${data.me.lastName}`}
                      src={""}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{data.me.username}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <Button
                    onClick={() => {
                      logout({}).then();
                    }}
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    isLoading={loggingOut}
                    colorScheme="teal"
                    width="full"
                  >
                    Logout
                  </Button>
                </MenuList>
              </Menu>
            ) : (
              <Box>
                <NavLink href={"/login"}>Kirish</NavLink>
              </Box>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
