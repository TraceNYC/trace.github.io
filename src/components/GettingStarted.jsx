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

import { IoIosArrowDropdownCircle, IoStatsChart } from 'react-icons/io'
import { FiPackage } from 'react-icons/fi'
import { AiFillSetting } from 'react-icons/ai'
import { FaRegChartBar } from 'react-icons/fa'

import styled from 'styled-components'

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
        pt='8rem'
        pl='8rem'
        pr='8rem'
        bgColor='#1A202C'>
        <Heading as='h2' size='4xl' bgColor='transparent' color='#fff' fontFamily='Montserrat'>
          Getting Started
        </Heading>
        <Grid
          templateColumns='repeat(3, 1fr)'
          columnGap='3rem'
          pt='7rem'
          color='#fff'>
          <Flex direction='column' align='center'>
            <Icon
              as={FiPackage}
              boxSize='200' />
            <Text fontWeight='600' fontSize='1.8rem' color='#42B8FD' pt='3rem'>STEP 1</Text>
            <Text fontWeight='400' fontSize='1.3rem' color='#fff' textAlign='justify'>Install Trace's npm package</Text>
          </Flex>
          <Flex direction='column' align='center'>
            <Icon
              as={AiFillSetting}
              boxSize='200' />
            <Text fontWeight='600' fontSize='1.8rem' color='#42B8FD' pt='3rem'>STEP 2</Text>
            <Text fontWeight='400' fontSize='1.3rem' color='#fff' textAlign='justify'>Set your server up with Trace</Text>
          </Flex>
          <Flex direction='column' align='center'>
            <Icon
              as={FaRegChartBar}
              boxSize='200' />
            <Text fontWeight='600' fontSize='1.8rem' color='#42B8FD' pt='3rem'>STEP 3</Text>
            <Text fontWeight='400' fontSize='1.3rem' color='#fff' textAlign='justify'>Start viewing metrics</Text>
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
