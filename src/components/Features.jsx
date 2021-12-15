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

import DownButton from './DownButton'

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
      h='100vh'
      w='100vw'>
      <Box
        id='Features'
        h='100%'
        w='100%'
        pt='8rem'
        pl='8rem'
        bgColor='#1A202C'>
        <Heading as='h2' size='4xl' bgColor='transparent' color='#fff' mb='2rem' fontFamily='Montserrat'>
          Features
        </Heading>

        <Flex direction='column' justify='center' align='start' gap='2rem'>
          <StyledFeatureWrapper>
            <Icon as={GoGraph} boxSize={65} color='#42B8FD' mt='0.8rem' />
            <Flex direction='column'>
              <Heading as='h3' fontSize='2.2rem' fontWeight='600' color='#42B8FD' fontFamily='Montserrat'>Real-time data collection</Heading>
              <Text fontSize='1.2rem' color='#fff' >Real-time, resolver-level query performance data collection from your GraphQL server</Text>
            </Flex>
          </StyledFeatureWrapper>

          <StyledFeatureWrapper>
            <Icon as={MdOutlineAutoGraph} boxSize={65} color='#42B8FD' mt='0.8rem' />
            <Flex direction='column'>
            <Heading as='h3' fontSize='2.2rem' fontWeight='600' color='#42B8FD' fontFamily='Montserrat'>Data visualization</Heading>
              <Text fontSize='1.2rem' color='#fff'> Visualization of individual query traces and averages</Text>
            </Flex>
          </StyledFeatureWrapper>

          <StyledFeatureWrapper>
            <Icon as={GiLightningTear} boxSize={65} color='#42B8FD' mt='0.8rem' />
            <Flex direction='column'>
              <Heading as='h3' fontSize='2.2rem' fontWeight='600' color='#42B8FD' fontFamily='Montserrat'>Valuable insights in one view</Heading>
              <Text fontSize='1.2rem' color='#fff'>Insights on the averages and counts of root operations and specific resolvers</Text>
            </Flex>
          </StyledFeatureWrapper>

          <StyledFeatureWrapper>
            <Icon as={BiError} boxSize={65} color='#42B8FD' mt='0.8rem' />
            <Flex direction='column'>
              <Heading as='h3' fontSize='2.2rem' fontWeight='600' color='#42B8FD' fontFamily='Montserrat'>Error tracking</Heading>
              <Text fontSize='1.2rem' color='#fff'>Error tracking for queries that fail during the GraphQL parsing, validation, or execution phase</Text>
            </Flex>
          </StyledFeatureWrapper>
        </Flex>
      </Box>
      <DownButton navId='#GettingStarted' />
    </Box>
  )
}

export default Features
