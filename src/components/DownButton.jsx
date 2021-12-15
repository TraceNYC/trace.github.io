import { Link, Icon } from '@chakra-ui/react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const DownButton = ({ navId }) => (
  <Link
    href={ navId }
    position='relative'
    left='50%'
    bottom='10%'>
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