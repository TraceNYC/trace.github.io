import Link from 'next/link';
import { useState } from 'react';
import { Box, Flex, Icon, Button, IconButton, Text, Image } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { FiMenu } from 'react-icons/fi'

import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";

import { prefix } from '../utils/prefix';

import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em', // 450 px
  md: '48em', // 720 px
  lg: '62em', // 930 px
  xl: '80em', // 1200 px
  '2xl': '96em', // 1440px
})

const Navbar = () => {
  const [hamburgerDisplay, setHamburgerDisplay] = useState('none')

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <Flex
        justifyContent="space-between"
        backgroundColor={'#1A202C'}
        color={'#fff'}
        p='0.6rem 1.2rem'
        width='100vw'
        position='fixed'
        zIndex='1'>

        {/* NAVBAR LEFT CONTAINER */}
        <Flex
          alignItems="center"
          gap={['1rem', '1rem', '1.5rem', '2.5rem', '3rem']}
          fontSize={['0rem', '0.6rem', '0.6rem', '0.8rem', '1rem']}
        >
          {/* NAVBAR LOGO + HOMEPAGE TEXT */}
          <Flex alignItems='center' justify='center'>
            <Link href="/" passHref>
              <Image
                src={`${prefix}/T.png`}
                alt='Trace Logo'
                boxSize={['30px', '35px', '40px', '45px', '50px']}
                _hover={{ cursor: 'pointer' }}
              />
            </Link>
            <Link href="/" passHref>
              <Text
                ml={'.5rem'}
                px={2}
                fontFamily={'Montserrat'}
                fontWeight={'700'}
                fontSize={['1.5rem', '1.5rem', '1.8rem', '2.2rem', '2.5rem']}
                _hover={{ cursor: 'pointer' }}
              >TRACE</Text>
            </Link>
          </Flex>

          {/* NAVBAR SECTION LINKS */}
          <Flex
            gap={['1rem', '1rem', '1.5rem', '2.5rem', '3rem']}
            fontSize={['0rem', '0rem', '0.8rem', '0.9rem', '1rem']}
            display={['none', 'none', 'flex', 'flex', 'flex']}
          >
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
              <Link href="#About" passHref>ABOUT</Link>
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
              <Link href="#Features" passHref>FEATURES</Link>
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
              <Link href="#GettingStarted" passHref>GETTING STARTED</Link>
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
              <Link href="#Team" passHref>THE TEAM</Link>
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
              <Link href="#Contributions" passHref>CONTRIBUTIONS</Link>
            </Box>
          </Flex>

        </Flex>

        {/* NAVBAR RIGHT 2 ICONS */}
        <Flex
          alignItems="center"
          gap='1.5rem'
          pr='0.5rem'
          display={['none', 'none', 'flex', 'flex', 'flex']}
        >
          <Link href='https://www.linkedin.com/company/go-trace' passHref>
            <Icon
              as={AiFillLinkedin}
              aria-label='LinkedIn'
              boxSize={['0px', '0px', '30px', '35px', '40px']}
              color='#ccc'
              _hover={{ color: '#fff', cursor: 'pointer' }}
              transition={{ duration: 5 }}
            />
          </Link>
          <Link href='https://github.com/oslabs-beta/trace' passHref>
            <Icon
              as={AiFillGithub}
              aria-label='GitHub'
              boxSize={['0px', '0px', '30px', '35px', '40px']}
              color='#ccc'
              _hover={{ color: '#fff', cursor: 'pointer' }}
              transition={{ enter: { duration: 5 } }}
            />
          </Link>
        </Flex>

        {/* HAMBURGER ICON */}
        <Icon
          aria-label='Open Menu'
          boxSize='2rem'
          mr='2'
          as={FiMenu}
          bg='transparent'
          outline='none'
          display={['flex', 'flex', 'none', 'none', 'none']}
          onClick={() => hamburgerDisplay === 'none' ? setHamburgerDisplay('flex') : setHamburgerDisplay('none')}
          _active={{ color: '#ccc' }}
        />
      </Flex>

      {/* HAMBURGER MENU */}
      <Flex
        direction='column'
        align='center'
        justify='center'
        gap='1rem'
        display={[hamburgerDisplay, hamburgerDisplay, 'none', 'none', 'none']}
        position='fixed'
        w='100%'
        t='0'
        l='50'
        pb='1rem'
        mt='3.5rem'
        bgColor='#1A202C'
        zIndex='1'
      >
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
          <Link href="#About" passHref>ABOUT</Link>
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
          <Link href="#Features" passHref>FEATURES</Link>
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
          <Link href="#GettingStarted" passHref>GETTING STARTED</Link>
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
          <Link href="#Team" passHref>THE TEAM</Link>
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
          <Link href="#Contributions" passHref>CONTRIBUTIONS</Link>
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
          <Link href="https://www.linkedin.com/company/go-trace" passHref>LINKEDIN</Link>
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
          <Link href="https://github.com/oslabs-beta/trace" passHref>GITHUB</Link>
        </Box>
      </Flex>
    </>
  )
}

export default Navbar;
