import { Link, Icon } from '@chakra-ui/react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const DownButton = ({ navId, bottom }) => (
  <Link
    href={ navId }
    position='relative'
    left='46%'
    bottom={ bottom }
    >
    <Icon
      as={IoIosArrowDropdownCircle}
      aria-label='Navigate Down'
      boxSize={50}
      color='#fff'
      _hover={{ color: '#ccc', cursor: 'pointer' }}
      transition={{ duration: 5 }}
    />
  </Link>
)

export default DownButton