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
  font-size: 1.5rem;
  font-weight: 400;
  color: #42B8FD;
`

const BioText = styled.p`
  color: #fff;
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
        <Heading as='h2' fontSize={['2rem', '3rem', '3rem', '4rem', '4.2rem']} bgColor='transparent' color='#fff' fontFamily='Montserrat' pt='1rem'>
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
          justify='space-around'
          direction={['column', 'column', 'row', 'row', 'row']}
          mt={['30px', '50px', '70px', '90px', '100px']}>
          <Flex direction='column' align='center'>
            <Image
              src={`${prefix}/GraceHeadshot.png`}
              fallbackSrc={`${prefix}/T.png`}
              alt='Grace head shot'
              borderRadius='full'
              boxSize={['100px', '100px','100px', '150px', '150px']}
              objectFit='cover' />
            <NameText>Grace Yun</NameText>
            <BioText>Software Engineer</BioText>
          </Flex>
          <Flex direction='column' align='center'>
            <Image
              src={`${prefix}/PatHeadshot.png`}
              alt='Pat head shot'
              fallbackSrc={`${prefix}/T.png`}
              borderRadius='full'
              boxSize={['100px', '100px','100px', '150px', '150px']}
              objectFit='cover' />
            <NameText>Pat Constant</NameText>
            <BioText>Software Engineer</BioText>
          </Flex>

          <Flex direction='column' align='center'>
          <Image
              src={`${prefix}/EddyHeadshot.png`}
              alt='Eddy head shot'
              fallbackSrc={`${prefix}/T.png`}
              borderRadius='full'
              boxSize={['100px', '100px','100px', '150px', '150px']}
              objectFit='cover' />
            <NameText>Eddy Kwon</NameText>
            <BioText>Software Engineer</BioText>
          </Flex>
          <Flex direction='column' align='center'>
            <Image
              src={`${prefix}/AlexHeadshot.png`}
              alt='Alex head shot'
              fallbackSrc={`${prefix}/T.png`}
              borderRadius='full'
              boxSize={['100px', '100px','100px', '150px', '150px']}
              objectFit='cover' />
            <NameText>Alex Hager</NameText>
            <BioText>Software Engineer</BioText>
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


