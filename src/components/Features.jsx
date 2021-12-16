import {
  Box,
  Heading,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react'

import { GoGraph } from 'react-icons/go'
import { MdOutlineAutoGraph } from 'react-icons/md'
import { GiLightningTear } from 'react-icons/gi'
import { BiError } from 'react-icons/bi'
import styled from 'styled-components'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import DownButton from './DownButton'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '55em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const StyledFeatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
// Causing bugs where style does not get applied sometimes
// For bullet point headings
// const StyledFeatureTitle = styled.p`
// font-size: 2.2rem;
// font-weight: 600;
// color: #42B8FD;
// `


const Features = () => {
  return (
    <Box
      h='100%'
      minHeight='100vh'
      w='100vw'
      bgColor='#1A202C'
      >
      <Flex
        direction='column'
        id='Features'
        h='100%'
        w='100%'
        pt='8rem'
        pl={['0', '0', '6rem', '6rem', '6rem']}
        bgColor='#1A202C'
        align={['center', 'center', 'flex-start']}
        >
        <Heading as='h2' fontSize={['3rem','3rem','3rem','4rem','4.2rem']} bgColor='transparent' color='#fff' mb='2rem' fontFamily='Montserrat'
        pl={['0', '0', '6rem', '6rem', '6rem']}
        textAlign={['center', 'center', 'left', 'left', 'left']}
        >
          Features
        </Heading>

        <Flex width='90%' direction='column' justify='center' align='start' gap='2rem' pl={['2rem', '2rem', '6rem', '6rem', '6rem']}
        pr={['2rem', '2rem', '0', '0', '0']}>
          <StyledFeatureWrapper>
            <Icon as={GoGraph} boxSize={65} color='#42B8FD' mt='0.8rem'/>
            <Flex direction='column'>
              <Heading as='h3' fontSize={['1.2rem','1.5rem','1.7rem','2.5rem','2.7rem']} fontWeight='600' color='#42B8FD' fontFamily='Montserrat'>Real-time data collection</Heading>
              <Text fontSize={['.9rem','1rem','1.2rem','1.4rem','1.4rem']} color='#fff' >Real-time, resolver-level query performance data collection from your GraphQL server</Text>
            </Flex>
          </StyledFeatureWrapper>

          <StyledFeatureWrapper>
            <Icon as={MdOutlineAutoGraph} boxSize={65} color='#42B8FD' mt='0.8rem' />
            <Flex direction='column'>
            <Heading as='h3' fontSize={['1.2rem','1.5rem','1.7rem','2.5rem','2.7rem']} fontWeight='600' color='#42B8FD' fontFamily='Montserrat'>Data visualization</Heading>
              <Text fontSize={['.9rem','1rem','1.2rem','1.4rem','1.4rem']} color='#fff'> Visualization of individual query traces and averages</Text>
            </Flex>
          </StyledFeatureWrapper>

          <StyledFeatureWrapper>
            <Icon as={GiLightningTear} boxSize={65} color='#42B8FD' mt='0.8rem' />
            <Flex direction='column'>
              <Heading as='h3' fontSize={['1.2rem','1.5rem','1.7rem','2.5rem','2.7rem']} fontWeight='600' color='#42B8FD' fontFamily='Montserrat'>Valuable insights in one view</Heading>
              <Text fontSize={['.9rem','1rem','1.2rem','1.4rem','1.4rem']} color='#fff'>Insights on the averages and counts of root operations and specific resolvers</Text>
            </Flex>
          </StyledFeatureWrapper>

          <StyledFeatureWrapper>
            <Icon as={BiError} boxSize={65} color='#42B8FD' mt='0.8rem' />
            <Flex direction='column'>
              <Heading as='h3' fontSize={['1.2rem','1.5rem','1.7rem','2.5rem','2.7rem']} fontWeight='600' color='#42B8FD' fontFamily='Montserrat'>Error tracking</Heading>
              <Text fontSize={['.9rem','1rem','1.2rem','1.4rem','1.4rem']} color='#fff'>Error tracking for queries that fail during the GraphQL parsing, validation, or execution phase</Text>
            </Flex>
          </StyledFeatureWrapper>
        </Flex>
      </Flex>
      <DownButton navId='#GettingStarted' bottom='-1.5vh' />
    </Box>
  )
}

export default Features
