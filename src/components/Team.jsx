import {
  Box,
  Heading,
  Grid,
  Flex
} from '@chakra-ui/react'
import { motion } from "framer-motion"
import styled from 'styled-components'
import { prefix } from '../utils/prefix';

import DownButton from './DownButton'

const TempBox = styled.div`
  width: 150px;
  height: 150px;
  backgroundColor: #fff
`

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
    <Box
      h='100%'
      minHeight='100vh'
      w='100vw'
      bgColor='#004A98'
      pb='4rem'
    >
      <Box
        id='Team'
        h='100%'
        w='100vw'
        pt='9rem'
        pl='3rem'
        pr='3rem'
        bgColor='#004A98'
        align='center'
      >
        {/* <motion.div
        initial={{ opacity: 0, pl: '-30px' }}
        whileInView={{ opacity: 1, pl: '8rem' }}
        viewport={{ once: true }}> */}
        <Heading as='h2' fontSize={['3rem','3rem','3rem','4rem','4.2rem']} bgColor='transparent' color='#fff' fontFamily='Montserrat' pt='1rem'>
          Meet the Team
        </Heading>
        <Grid
          templateColumns='repeat(2, 1fr)'
          templateRows='repeat(2, 20vh)'
          rowGap='5rem'
          columnGap='5rem'
          pt='5rem'
          color='#fff'
          w='100%'
        >
          <Flex direction='column' align='center'>
            <TempBox>Picture</TempBox>
            <NameText>Grace Yun</NameText>
            <BioText>Software Engineer</BioText>
          </Flex>
          <Flex direction='column' align='center'>
            <TempBox>Picture</TempBox>
            <NameText>Pat Constant</NameText>
            <BioText>Software Engineer</BioText>
          </Flex>

          <Flex direction='column' align='center'>
            <TempBox>Picture</TempBox>
            <NameText>Eddy Kwon</NameText>
            <BioText>Software Engineer</BioText>
          </Flex>
          <Flex direction='column' align='center'>
            <TempBox>Picture</TempBox>
            <NameText>Alex Hager</NameText>
            <BioText>Software Engineer</BioText>
          </Flex>

        </Grid>
        {/* </motion.div> */}
      </Box>
      <DownButton navId='#Contributions' bottom='-5' left='48%'/>
    </Box>
  )
}

export default Team