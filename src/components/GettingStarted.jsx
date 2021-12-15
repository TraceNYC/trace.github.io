import {
  Box,
  Heading,
  Grid,
  Flex,
  Text,
  Link,
  Icon
} from '@chakra-ui/react'

import DownButton from './DownButton'
import { FiPackage } from 'react-icons/fi'
import { AiFillSetting } from 'react-icons/ai'
import { FaRegChartBar } from 'react-icons/fa'

const GettingStarted = () => {
  return (
    <Box
      h='100%'
      minHeight='100vh'
      w='100vw'
      pb='5rem'
      bgColor='#1A202C'
    >
      <Flex
        direction='column'
        id='GettingStarted'
        h='100%'
        w='100%'
        pt='11rem'
        pl='0'
        bgColor='#1A202C'
        justify='center'
        align='center'
      >
        <Heading as='h2' fontSize={['3rem','3rem','3rem','4rem','4.2rem']} bgColor='transparent' color='#fff' 
        fontFamily='Montserrat'>
          Getting Started
        </Heading>
        <Grid
          templateColumns={['100%', '100%', '100%', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
          columnGap='3rem'
          pt='3rem'
          color='#fff'>
          <Flex direction={['row','row','row','column','column']} align='center' justify='flex-start' m='2rem' justifyContent='space-between'>
            <Icon
              as={FiPackage}
              boxSize={['30','50','100','200','200']} />
            <Text fontWeight='600' fontSize={['1rem','1rem','1.5rem','1.9rem','2rem']} color='#42B8FD' m='0 1rem'>STEP 1</Text>
            <Text fontWeight='400' fontSize={['.9rem','1rem','1.2rem','1.4rem','1.4rem']} color='#fff' textAlign='justify'>Install Trace{"'"}s npm package</Text>
          </Flex>
          <Flex direction={['row','row','row','column','column']} align='center' justify='flex-start' m='2rem'>
            <Icon
              as={AiFillSetting}
              boxSize={['30','50','100','200','200']}/>
            <Text fontWeight='600' fontSize={['1rem','1rem','1.5rem','1.9rem','2rem']} color='#42B8FD' m='0 1rem'>STEP 2</Text>
            <Text fontWeight='400' fontSize={['.9rem','1rem','1.2rem','1.4rem','1.4rem']} color='#fff' textAlign='justify'>Set your server up with Trace</Text>
          </Flex>
          <Flex direction={['row','row','row','column','column']} align='center' justify='flex-start' m='2rem'>
            <Icon
              as={FaRegChartBar}
              boxSize={['30','50','100','200','200']}/>
            <Text fontWeight='600' fontSize={['1rem','1rem','1.5rem','1.9rem','2rem']} color='#42B8FD' m='0 1rem'>STEP 3</Text>
            <Text fontWeight='400' fontSize={['.9rem','1rem','1.2rem','1.4rem','1.4rem']} color='#fff' textAlign='justify'>Start viewing metrics</Text>
          </Flex>
        </Grid>
      </Flex>
      <DownButton navId='#Team' bottom='0' left='48.5%' />
    </Box>
  )
}

export default GettingStarted
