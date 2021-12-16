import { Link, Icon, Flex } from '@chakra-ui/react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '55em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const DownButton = ({ navId, bottom }) => (
  <Flex justifyContent={'center'} alignItems={'center'}>
    <Link
      href={ navId }
      position='relative'
      bottom={ bottom }
      >
      <Icon
        as={IoIosArrowDropdownCircle}
        aria-label='Navigate Down'
        boxSize={[ 30, 35, 39.99, 45, 50]}
        color='#fff'
        _hover={{ color: '#ccc', cursor: 'pointer' }}
        transition={{ duration: 5 }}
      />
    </Link>
  </Flex>
)

export default DownButton