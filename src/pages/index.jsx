import Landing from '../components/Landing'
import About from '../components/About'
import Features from '../components/Features'
import GettingStarted from '../components/GettingStarted'
import Team from '../components/Team'
import Contributions from '../components/Contributions'
import { Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <Flex direction='column' >
      <Landing />
      <About />
      <Features />
      <GettingStarted />
      <Team />
      <Contributions />
    </Flex>
  )
}

export default Home;