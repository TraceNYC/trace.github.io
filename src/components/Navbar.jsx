import Link from 'next/link';
import { Box, Flex, IconButton, Text, Image, Icon } from '@chakra-ui/react'
import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";
import { prefix } from '../utils/prefix';
import { motion } from 'framer-motion'
const Navbar = () => {

  return (
    <Flex
      justifyContent="space-between"
      backgroundColor={'#1A202C'}
      color={'#fff'}
      p='0.6rem 1.2rem'
      width='100vw'
      position='fixed'>
      <Flex
        alignItems="flex-end"
        gap='3rem'
      >
        <Flex alignItems='center' justify='center'>
          <Link href="/">
            <Image
              src={`${prefix}/T.png`}
              alt='Trace Logo'
              boxSize='50px'
              _hover={{ cursor: 'pointer' }}
            />
          </Link>
          <Link href="/">
            <Text
              ml={'.5rem'}
              px={2}
              fontFamily={'Montserrat'}
              fontWeight={'700'}
              fontSize={'2.5rem'}
              _hover={{ cursor: 'pointer' }}
            >TRACE</Text>
          </Link>
        </Flex>
        <Box
          alignSelf='center'
          pt='0.2rem'
          color='gray.500'
          _hover={{
            textDecoration: "underline",
            color: "#fff"
          }}
          fontFamily={'Montserrat'}
          fontWeight={'400'}
          textUnderlineOffset={'0.5em'}
        >
          <Link href="#About">ABOUT</Link>
        </Box>
        <Box
          alignSelf='center'
          pt='0.2rem'
          color='gray.500'
          _hover={{
            textDecoration: "underline",
            color: "#fff"
          }}
          fontFamily={'Montserrat'}
          fontWeight={'400'}
          textUnderlineOffset={'0.5em'}
        >
          <Link href="#Features">FEATURES</Link>
        </Box>
        <Box
          alignSelf='center'
          pt='0.2rem'
          color='gray.500'
          _hover={{
            textDecoration: "underline",
            color: "#fff"
          }}
          fontFamily={'Montserrat'}
          fontWeight={'400'}
          textUnderlineOffset={'0.5em'}
        >
          <Link href="#GettingStarted">GETTING STARTED</Link>
        </Box>
        <Box
          alignSelf='center'
          pt='0.2rem'
          color='gray.500'
          _hover={{
            textDecoration: "underline",
            color: "#fff"
          }}
          fontFamily={'Montserrat'}
          fontWeight={'400'}
          textUnderlineOffset={'0.5em'}
        >
          <Link href="#Team">THE TEAM</Link>
        </Box>
        <Box
          alignSelf='center'
          pt='0.2rem'
          color='gray.500'
          _hover={{
            textDecoration: "underline",
            color: "#fff"
          }}
          fontFamily={'Montserrat'}
          fontWeight={'400'}
          textUnderlineOffset={'0.5em'}
        >
          <Link href="#Contributions">CONTRIBUTIONS</Link>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        gap='1.5rem'
        pr='0.5rem'
      >
        <Link href='https://www.linkedin.com/company/go-trace'>
          <Icon
            as={AiFillLinkedin}
            aria-label='LinkedIn'
            boxSize={35}
            color='#ccc'
            _hover={{ color: '#fff', cursor: 'pointer' }}
            transition={{ duration: 5 }}
          />
        </Link>
        <Link href='https://github.com/oslabs-beta/trace'>
          <Icon
            as={AiFillGithub}
            aria-label='GitHub'
            boxSize={35}
            color='#ccc'
            _hover={{ color: '#fff', cursor: 'pointer' }}
            transition={{ enter: { duration: 5 } }}
          />
        </Link>
      </Flex>
    </Flex>
  )
}

export default Navbar;
