import {
  Box,
  Heading,
  Grid,
  Flex,
  Text,
  Code,
  Link,
  Icon
} from '@chakra-ui/react'

import { IoIosArrowDropdownCircle } from 'react-icons/io'

const GettingStarted = () => {
  return (
    <Box
      h='100vh'
      w='100vw'
    >
      <Box
        id='GettingStarted'
        h='100%'
        w='100%'
        pt='6rem'
        pl='8rem'
        pr='8rem'
        bgColor='#1A202C'>
        <Heading as='h2' size='4xl' bgColor='transparent' color='#fff' fontFamily='Montserrat'>
          Getting Started
        </Heading>
        <Grid
          templateColumns='repeat(3, 1fr)'
          columnGap='3rem'
          pt='5rem'
          color='#fff'>
          <Flex direction='column' align='center'>
            <Box h='300px' w='300px' border='1px' borderColor='#fff'><Code>Code</Code></Box>
            <Text fontWeight='600' fontSize='2rem' color='#42B8FD' pt='5rem'>STEP 1</Text>
            <Text color='#fff' textAlign='justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quidem soluta aut. Eos ipsa facere quasi eum deserunt vel necessitatibus.</Text>
          </Flex>
          <Flex direction='column' align='center'>
            <Box h='300px' w='300px' border='1px' borderColor='#fff'><Code>Code</Code></Box>
            <Text fontWeight='600' fontSize='2rem' color='#42B8FD' pt='5rem'>STEP 2</Text>
            <Text color='#fff' textAlign='justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quidem soluta aut. Eos ipsa facere quasi eum deserunt vel necessitatibus.</Text>
          </Flex>
          <Flex direction='column' align='center'>
            <Box h='300px' w='300px' border='1px' borderColor='#fff'><Code>Code</Code></Box>
            <Text fontWeight='600' fontSize='2rem' color='#42B8FD' pt='5rem'>STEP 3</Text>
            <Text color='#fff' textAlign='justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quidem soluta aut. Eos ipsa facere quasi eum deserunt vel necessitatibus.</Text>
          </Flex>
        </Grid>
      </Box>
      <Link
        href='#Team'
        position='relative'
        left='50%'
        bottom='10%'>
        <Icon
          as={IoIosArrowDropdownCircle}
          aria-label='Navigate Down'
          boxSize={50}
          color='#fff'
          _hover={{ color: '#ccc', cursor: 'pointer' }}
          transition={{ duration: 5 }}
        />
      </Link>
    </Box>
  )
}

export default GettingStarted
