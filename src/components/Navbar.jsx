import Link from 'next/link';
import navStyles from '../styles/Navbar.module.css'
import { Box, Flex, IconButton, useColorModeValue } from '@chakra-ui/react'
import { 
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";
import { prefix } from '../utils/prefix';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {

  const Links = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "How To",
      path: "/howTo/",
    }
  ];

  return (
    <div className="navStyles.navbar">
      <Flex
        justifyContent="space-between"
      >
        <Flex>
          <Link href="/">
            <img 
               src={`${prefix}/T.png`}
              alt='Trace Logo'
              width={'50px'}
              height={'50px'}
            />
          </Link>
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
            <Link href="/getting-started">Getting Started</Link>
          </Box>
        </Flex>
        <Flex>
          <IconButton 
            href='https://www.linkedin.com/company/go-trace'
            aria-label='LinkedIn' 
            icon={<AiFillLinkedin />}  
          />
          <IconButton 
            href='https://github.com/oslabs-beta/trace'
            aria-label='GitHub' 
            icon={<AiFillGithub />}  
          />
        </Flex>
      </Flex>
    </div>
  )
}

export default Navbar;
