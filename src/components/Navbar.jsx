import Link from 'next/link';
import navStyles from '../styles/Navbar.module.css'
import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import { 
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";
import { prefix } from '../utils/prefix';

const Navbar = () => {

  return (
    <Flex
      justifyContent="space-between"
      backgroundColor={'#1A202C'}
      color={'#fff'}
      pb={5}
    >
      <Flex
        alignItems="flex-end"
      >
        <Flex alignItems='center'>
          <Link href="/">
            <img 
              src={`${prefix}/T.png`}
              alt='Trace Logo'
              width={'50px'}
              height={'50px'}
            />
          </Link>
          <Text
            ml={'.5rem'}
            px={2}
            fontFamily={'Montserrat'}
            fontWeight={'700'}
            fontSize={'2.5rem'}
          >TRACE</Text>
        </Flex>
        <Box
          px={2}
          py={3}
          color='gray.500'
          _hover={{
            textDecoration: "underline",
            color: "#fff"
          }}
          fontFamily={'Montserrat'}
          fontWeight={'400'}
          textUnderlineOffset={'0.5em'}
        >
          <Link href="/about">ABOUT</Link>
        </Box>
        <Box
          px={2}
          py={3}
          color='gray.500'
          _hover={{
            textDecoration: "underline",
            color: "#fff"
          }}
          fontFamily={'Montserrat'}
          fontWeight={'400'}
          textUnderlineOffset={'0.5em'}
        >
          <Link href="/getting-started">GETTING STARTED</Link>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        pt={3}
      >
        <IconButton 
          href='https://www.linkedin.com/company/go-trace'
          aria-label='LinkedIn' 
          variant='link'
          size='lg'
          _hover={{ color: '#fff' }}
          icon={<AiFillLinkedin />}  
        />
        <IconButton 
          href='https://github.com/oslabs-beta/trace'
          aria-label='GitHub' 
          variant='link'
          size='lg'
          _hover={{ color: '#fff' }}
          icon={<AiFillGithub />}  
        />
      </Flex>
    </Flex>
  )
}

export default Navbar;
