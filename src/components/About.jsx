import {
  Flex,
  Heading,
  Text,
  Box
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import DownButton from './DownButton'

// import {
//   IoIosArrowDropdownCircle
// } from 'react-icons/io'


const breakpoints = createBreakpoints({
  sm: '30em',
  md: '55em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const About = () => {
  return (
    <Box
      h='100vh'
      w='100vw'
      bgColor='#004A98'
    >
      <Flex
        id='About'
        direction='column'
        justify='center'
        bgColor='#004A98'
        h='100%'
        w='100%'
      >
        <Flex
          direction={["column", "column", "row", "row", "row"]}
          justifyContent='center'
          alignItems='center'
        >
          <Heading
            as='h1'
            fontSize={['2.4rem','4.5rem','6.5rem','7.5rem','10rem']}
            fontFamily='Montserrat'
            size='4xl'
            textAlign={['center', 'center', 'left', 'left', 'left']}
            pl={['0', '0', '6rem', '6rem', '6rem']}
            pb={['2rem', '2rem', '0', '0', '0']}
            bgColor='transparent'
            w={['90%','90%','50%','50%','50%']}
            color='white'>
            What is Trace?
          </Heading>
          <Text w={['90%','90%','60%','50%','50%']} color='#fff' pr='4rem' pl='4rem' fontSize={['.9rem','1.2rem','1.2rem','1.4rem','1.4rem']} lineHeight='1.7' textAlign='justify'>
            {"Trace is a lightweight, open-source GraphQL query performance monitoring GUI that provides users with real-time, resolver-level performance tracing metrics and error logging. At its inception, Trace was created for the developer looking for a straightforward option for query performance monitoring on their Express-GraphQL server — without having to install hefty libraries full of tools they'll never use such as Apollo or Hasura. Trace provides a simple, intuitive interface for users looking to test queries for their Express-GraphQL servers."}
          </Text>
        </Flex>

      </Flex>
      <DownButton navId='#Features' bottom='28' />
    </Box>
  )
}

export default About
