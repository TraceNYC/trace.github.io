import {
  Flex,
  Heading,
  Text,
  Box
} from '@chakra-ui/react'

import DownButton from './DownButton'

// import {
//   IoIosArrowDropdownCircle
// } from 'react-icons/io'

const About = () => {
  return (
    <Box
      h='100vh'
      w='100vw'>
      <Box
        id='About'
        bgColor='#004A98'
        h='100%'
        w='100%'>
        <Flex
          justify='center'
          align='center'
          pt='21vh'>
          <Heading
            as='h1'
            fontSize='9.9rem'
            fontFamily='Montserrat'
            size='4xl'
            bgColor='transparent'
            w='50%'
            pl='8rem'
            color='white'>
            What <br />is <br />Trace?
          </Heading>
          <Text w='50%' color='#fff' pr='8rem' pl='3rem' fontSize='1.4rem' lineHeight='1.7' textAlign='justify'>
            Trace is a lightweight, open-source GraphQL query performance monitoring GUI that provides users with real-time, resolver-level performance tracing metrics and error logging. At its inception, Trace was created for the developer looking for a straightforward option for query performance monitoring on their Express-GraphQL server -- without having to install hefty libraries full of tools they{"'"}ll never use such as Apollo or Hasura. Trace provides a simple, intuitive interface for users looking to test queries for their Express-GraphQL servers.
          </Text>
        </Flex>

      </Box>
      <DownButton navId='#Features' />
    </Box>
  )
}

export default About
