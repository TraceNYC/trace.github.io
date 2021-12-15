import {
  Box,
  Heading,
  Grid,
  Flex
} from '@chakra-ui/react'
import { motion } from "framer-motion"
import styled from 'styled-components'
import { prefix } from '../utils/prefix';

import DownButton from './Downbutton'

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
      h='100vh'
      w='100vw'
    >
      <Box
        id='Team'
        h='100%'
        w='100%'
        pt='6rem'
        pl='8rem'
        pr='8rem'
        bgColor='#004A98'>
        {/* <motion.div
        initial={{ opacity: 0, pl: '-30px' }}
        whileInView={{ opacity: 1, pl: '8rem' }}
        viewport={{ once: true }}> */}
        <Heading as='h2' size='4xl' bgColor='transparent' color='#fff' fontFamily='Montserrat'>
          Meet the Team
        </Heading>
        <Grid
          templateColumns='repeat(2, 50%)'
          templateRows='repeat(2, 20vh)'
          rowGap='3rem'
          columnGap='3rem'
          pt='5rem'
          color='#fff'>


          < Flex >
            <TempBox>Picture</TempBox>
            <Flex direction='column'>
              <NameText>Name</NameText>
              <BioText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci delectus dolore libero, ex ipsa laudantium, quas repellat animi deleniti ut porro tenetur nesciunt! Nam blanditiis molestiae amet vitae quod.</BioText>
            </Flex>
          </Flex >
          < Flex >
            <TempBox>Picture</TempBox>
            <Flex direction='column'>
              <NameText>Name</NameText>
              <BioText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci delectus dolore libero, ex ipsa laudantium, quas repellat animi deleniti ut porro tenetur nesciunt! Nam blanditiis molestiae amet vitae quod.</BioText>
            </Flex>
          </Flex >


          < Flex >
            <TempBox>Picture</TempBox>
            <Flex direction='column'>
              <NameText>Name</NameText>
              <BioText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci delectus dolore libero, ex ipsa laudantium, quas repellat animi deleniti ut porro tenetur nesciunt! Nam blanditiis molestiae amet vitae quod.</BioText>
            </Flex>
          </Flex >
          < Flex >
            <TempBox>Picture</TempBox>
            <Flex direction='column'>
              <NameText>Name</NameText>
              <BioText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci delectus dolore libero, ex ipsa laudantium, quas repellat animi deleniti ut porro tenetur nesciunt! Nam blanditiis molestiae amet vitae quod.</BioText>
            </Flex>
          </Flex >

        </Grid>
        {/* </motion.div> */}
      </Box>
      <DownButton navId='#Contributions' />
    </Box>
  )
}

export default Team