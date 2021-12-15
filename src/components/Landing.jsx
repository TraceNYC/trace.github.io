import {
  chakra,
  Heading,
  Flex,
  Link,
  Box
} from '@chakra-ui/react'

import { motion } from "framer-motion"


const Landing = () => {
  return (
    <Flex
      id='Landing'
      direction='column'
      gap='7rem'
      justify='center'
      align='center'
      h='100vh'
      w='100vw'
      bgColor='#1A202C'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <Heading as='h1' fontSize='6rem' fontFamily={'Montserrat'} bgColor='transparent' color='white' textAlign='center'>
          Monitor  your <chakra.span color='#42B8FD'>GraphQL</chakra.span><br /> queries at the resolver level.
        </Heading>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <Box
          as='a'
          href='#About'
          textAlign='center'
          p='2.5rem 6rem'
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          border='1px'
          fontSize='1.5rem'
          fontWeight='semibold'
          bg='transparent'
          borderColor='#fff'
          color='#fff'
          outline='0px'
          _hover={{ bg: '#fff', color: '#1A202C' }}
          _active={{
            bg: '#42B8FD',
            color: '#fff',
            borderColor: '#42B8FD'
          }}
        >
          Get Started
        </Box>
      </motion.div>
    </Flex >
  )
}

export default Landing
