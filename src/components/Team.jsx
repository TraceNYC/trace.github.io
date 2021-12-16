import {
  Box,
  Heading,
  Grid,
  Flex,
  Image
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { motion } from "framer-motion"
import styled from 'styled-components'
import { prefix } from '../utils/prefix';

import DownButton from './DownButton'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '55em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})


const NameText = styled.p`
  font-weight: 500;
  color: #42B8FD;
  margin-top: 10px;

  @media (min-width: 30em) {
    font-size: 0.7rem;
  }
  @media (min-width: 55em) {
    font-size: 0.9rem;
  }
  @media (min-width: 62em) {
    font-size: 1.1rem;
  }
  @media (min-width: 80em) {
    font-size: 1.3rem;
  }
  @media (min-width: 96em) {
    font-size: 1.5rem;
  }
  
`

const BioText = styled.p`
  color: #fff;
  font-weight: 400;
`

const Team = () => {
  return (
    <Flex
      h='100vh'
      w='100vw'
      bgColor='#004A98'
      direction='column'
      justify='space-between'
    >
      <Box
        id='Team'
        h='100%'
        w='100%'
        pt='9rem'
        bgColor='#004A98'
        align='center'
      >
        {/* <motion.div
        initial={{ opacity: 0, pl: '-30px' }}
        whileInView={{ opacity: 1, pl: '8rem' }}
        viewport={{ once: true }}> */}
        <Heading as='h2' 
          fontSize={['2rem', '3rem', '3rem', '4rem', '4.2rem']} 
          bgColor='transparent' 
          color='#fff' 
          fontFamily='Montserrat'
          mt={[-50, 0, 0, 0, 0]}>
          Meet the Team
        </Heading>
        {/* <Grid
          templateColumns='repeat(2, 1fr)'
          templateRows='repeat(2, 20vh)'
          rowGap='3rem'
          columnGap='3rem'
          pt='5rem'
          color='#fff'
          w='100vw'
        > */}
        <Flex
          justify='center'
          direction={['column', 'column', 'row', 'row', 'row']}
          mt={['40px', '20px', '20px', '90px', '100px']}
          gap={['25px', '40px', '60px', '3px', '100px']}>
          <Flex 
            direction={['row', 'row', 'column', 'column', 'column']}
            align='center' 
            justify='center'
            gap='5px'>
            <Image
              src={`${prefix}/GraceHeadshot.png`}
              fallbackSrc={`${prefix}/T.png`}
              alt='Grace head shot'
              borderRadius='full'
              boxSize={['100px', '100px', '100px', '150px', '200px']}
              objectFit='cover' />
            <Flex direction='column' align={['start', 'start', 'center', 'center', 'center']}>
              <NameText>Grace Yun</NameText>
              <BioText>Software Engineer</BioText>
            </Flex>
          </Flex>
          <Flex 
            direction={['row', 'row', 'column', 'column', 'column']}
            align='center' 
            justify='center'
            gap='5px'>
            <Image
              src={`${prefix}/PatHeadshot.png`}
              fallbackSrc={`${prefix}/T.png`}
              alt='Grace head shot'
              borderRadius='full'
              boxSize={['100px', '100px', '100px', '150px', '200px']}
              objectFit='cover' />
            <Flex direction='column' align={['start', 'start', 'center', 'center', 'center']}>
              <NameText>Pat Constant</NameText>
              <BioText>Software Engineer</BioText>
            </Flex>
          </Flex>
          <Flex 
            direction={['row', 'row', 'column', 'column', 'column']}
            align='center' 
            justify='center'
            gap='5px'>
            <Image
              src={`${prefix}/EddyHeadshot.png`}
              fallbackSrc={`${prefix}/T.png`}
              alt='Grace head shot'
              borderRadius='full'
              boxSize={['100px', '100px', '100px', '150px', '200px']}
              objectFit='cover' />
            <Flex direction='column' align={['start', 'start', 'center', 'center', 'center']}>
              <NameText>Eddy Kwon</NameText>
              <BioText>Software Engineer</BioText>
            </Flex>
          </Flex>
          <Flex 
            direction={['row', 'row', 'column', 'column', 'column']}
            align='center' 
            justify='center'
            gap='5px'>
            <Image
              src={`${prefix}/AlexHeadshot.png`}
              fallbackSrc={`${prefix}/T.png`}
              alt='Grace head shot'
              borderRadius='full'
              boxSize={['100px', '100px', '100px', '150px', '200px']}
              objectFit='cover' />
            <Flex direction='column' align={['start', 'start', 'center', 'center', 'center']}>
              <NameText>Alex Hager</NameText>
              <BioText>Software Engineer</BioText>
            </Flex>
          </Flex>
          
        </Flex>
        {/* </Grid> */}
        {/* </motion.div> */}
      </Box>
      <DownButton navId='#Contributions' bottom='4vh' />
    </Flex>
  )
}

export default Team


