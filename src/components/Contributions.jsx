import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  Icon
} from '@chakra-ui/react'
import { 
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";
import { prefix } from '../utils/prefix';

const Contributions = () => {
  return (
    <Box
      id='Contributions'
      h='100vh'
      w='100vw'
      pt='8rem'
      bgColor='#1A202C'>
      <Flex direction='column' justify='center' align='center'>
        <Image
          src={`${prefix}/T.png`}
          alt='Trace Logo'
          boxSize='150px' />
        <Text fontSize='10rem' fontWeight='600' color='#fff'>TRACE</Text>
        <Text fontSize='1.5rem' color='#fff'>To contribute to Trace or report any issues, visit our GitHub page <a href='https://github.com/oslabs-beta/trace' style={{ color: '#42B8FD'}}>here</a>.</Text>
        <Flex gap='3rem' pt='5rem'>
        <Link href='https://www.linkedin.com/company/go-trace'>
          <Icon
            as={AiFillLinkedin}
            href='https://www.linkedin.com/company/go-trace'
            aria-label='LinkedIn'
            variant='link'
            boxSize={50}
            color='#ccc'
            _hover={{ color: '#fff', cursor: 'pointer' }}
            transition={{ duration: 5 }}
          />
        </Link>
        <Link href='https://github.com/oslabs-beta/trace'>
          <Icon
            as={AiFillGithub}
            href='https://github.com/oslabs-beta/trace'
            aria-label='GitHub'
            variant='link'
            boxSize={50}
            color='#ccc'
            _hover={{ color: '#fff', cursor: 'pointer' }}
            transition={{ enter: { duration: 5 } }}
          />
        </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Contributions
