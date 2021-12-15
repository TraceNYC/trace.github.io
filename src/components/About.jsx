import {
  Flex,
  Heading,
  Text,
  Link,
  Icon,
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
          pt='15vh'>
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
          <Text w='50%' color='#fff' pr='8rem' pl='3rem' fontSize='1.8rem' textAlign='justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quia praesentium temporibus, iste earum sit, nisi maiores, assumenda corrupti porro voluptas mollitia dolores ad illum repellendus facere obcaecati commodi reprehenderit officiis natus consequatur eius consectetur odio? Neque cum officiis dolor necessitatibus ullam, blanditiis tempore debitis libero, sapiente beatae optio ducimus!0
          </Text>
        </Flex>

      </Box>
      <DownButton navId='#Features' />
    </Box>
  )
}

export default About
