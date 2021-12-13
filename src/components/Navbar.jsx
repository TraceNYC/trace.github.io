import Link from 'next/link'
import navStyles from '../styles/Navbar.module.css'
import { Box, Flex, IconButton, useColorModeValue } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "How To",
      path: "/howTo/",
    }
  ];
  return (
    <div className="navStyles.navbar">
      <Box>
        <Flex>
          <IconButton
            size="md"
            icon={<HamburgerIcon />}
          // aria-label="Open Menu"
          // display={{ md: "None "}}
          // onClick={isOpen ? onClose : onOpen}
          />
          <Box
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            <Link href="/">Home</Link>
          </Box>
          <Box
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            <Link href="/about">About</Link>
          </Box>
          <Box
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            <Link href="/howTo">How To</Link>
          </Box>
          <Box
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            <Link href="https://github.com/oslabs-beta/trace">GitHub</Link>
          </Box>
          <Box
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          >
            <Link href="/https://www.npmjs.com/package/@go-trace/tracer">npm</Link>
          </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default Navbar;
