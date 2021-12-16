import {
  Box,
  Heading,
  Grid,
  Flex,
  Image,
  Link,
  Icon
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";

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
  font-weight: 600;
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
      h='100%'
      minHeight='100vh'
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
          pt={['40px', '20px', '40px', '90px', '90px']}
          gap={['25px', '40px', '60px', '80px', '100px']}>
          <Flex
            direction={['row', 'row', 'column', 'column', 'column']}
            align='center'
            justify='center'
            gap={['15px', '15px', '5px', '5px', '5px']}>
            <Image
              src={`${prefix}/GraceHeadshot.png`}
              fallbackSrc={`${prefix}/T.png`}
              alt='Grace head shot'
              borderRadius='full'
              boxSize={['100px', '100px', '100px', '150px', '200px']}
              objectFit='cover' />
            <Flex direction='column' align={['start', 'start', 'center', 'center', 'center']}>
              <NameText>Grace Yun</NameText>
              <Flex gap='3px'>
                <Link href='https://www.linkedin.com/in/gracejueunyun/' passHref>
                  <Icon
                    as={AiFillLinkedin}
                    aria-label='LinkedIn'
                    boxSize={['15px', '20px', '25px', '30px', '35px']}
                    color='#eee'
                    _hover={{ color: '#fff', cursor: 'pointer' }}
                  />
                </Link>
                <Link href='https://github.com/jueungrace' passHref>
                  <Icon
                    as={AiFillGithub}
                    aria-label='GitHub'
                    boxSize={['15px', '20px', '25px', '30px', '35px']}
                    color='#eee'
                    _hover={{ color: '#fff', cursor: 'pointer' }}
                  />
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction={['row', 'row', 'column', 'column', 'column']}
            align='center'
            justify='center'
            gap={['15px', '15px', '5px', '5px', '5px']}>
            <Image
              src={`${prefix}/PatHeadshot.png`}
              fallbackSrc={`${prefix}/T.png`}
              alt='Grace head shot'
              borderRadius='full'
              boxSize={['100px', '100px', '100px', '150px', '200px']}
              objectFit='cover' />
            <Flex direction='column' align={['start', 'start', 'center', 'center', 'center']}>
              <NameText>Pat Constant</NameText>
              <Flex gap='3px'>
                <Link href='https://www.linkedin.com/in/patrickconstant/' passHref>
                  <Icon
                    as={AiFillLinkedin}
                    aria-label='LinkedIn'
                    boxSize={['15px', '20px', '25px', '30px', '35px']}
                    color='#eee'
                    _hover={{ color: '#fff', cursor: 'pointer' }}
                  />
                </Link>
                <Link href='https://github.com/PLConstant' passHref>
                  <Icon
                    as={AiFillGithub}
                    aria-label='GitHub'
                    boxSize={['15px', '20px', '25px', '30px', '35px']}
                    color='#eee'
                    _hover={{ color: '#fff', cursor: 'pointer' }}
                  />
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction={['row', 'row', 'column', 'column', 'column']}
            align='center'
            justify='center'
            gap={['15px', '15px', '5px', '5px', '5px']}>
            <Image
              src={`${prefix}/EddyHeadshot.png`}
              fallbackSrc={`${prefix}/T.png`}
              alt='Grace head shot'
              borderRadius='full'
              boxSize={['100px', '100px', '100px', '150px', '200px']}
              objectFit='cover' />
            <Flex direction='column' align={['start', 'start', 'center', 'center', 'center']}>
              <NameText>Eddy Kwon</NameText>
              <Flex gap='3px'>
                <Link href='https://www.linkedin.com/in/eddykwon/' passHref>
                  <Icon
                    as={AiFillLinkedin}
                    aria-label='LinkedIn'
                    boxSize={['15px', '20px', '25px', '30px', '35px']}
                    color='#eee'
                    _hover={{ color: '#fff', cursor: 'pointer' }}
                  />
                </Link>
                <Link href='https://github.com/edwardkwon95' passHref>
                  <Icon
                    as={AiFillGithub}
                    aria-label='GitHub'
                    boxSize={['15px', '20px', '25px', '30px', '35px']}
                    color='#eee'
                    _hover={{ color: '#fff', cursor: 'pointer' }}
                  />
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction={['row', 'row', 'column', 'column', 'column']}
            align='center'
            justify='center'
            gap={['15px', '15px', '5px', '5px', '5px']}>
            <Image
              src={`${prefix}/AlexHeadshot.png`}
              fallbackSrc={`${prefix}/T.png`}
              alt='Grace head shot'
              borderRadius='full'
              boxSize={['100px', '100px', '100px', '150px', '200px']}
              objectFit='cover' />
            <Flex direction='column' align={['start', 'start', 'center', 'center', 'center']}>
              <NameText>Alex Hager</NameText>
              <Flex gap='3px'>
                <Link href='https://www.linkedin.com/in/hager-alexander/' passHref>
                  <Icon
                    as={AiFillLinkedin}
                    aria-label='LinkedIn'
                    boxSize={['15px', '20px', '25px', '30px', '35px']}
                    color='#eee'
                    _hover={{ color: '#fff', cursor: 'pointer' }}
                  />
                </Link>
                <Link href='https://github.com/Alexh2510' passHref>
                  <Icon
                    as={AiFillGithub}
                    aria-label='GitHub'
                    boxSize={['15px', '20px', '25px', '30px', '35px']}
                    color='#eee'
                    _hover={{ color: '#fff', cursor: 'pointer' }}
                  />
                </Link>
              </Flex>
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


