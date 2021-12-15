import { Link, Icon, Flex } from '@chakra-ui/react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

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
        boxSize={50}
        color='#fff'
        _hover={{ color: '#ccc', cursor: 'pointer' }}
        transition={{ duration: 5 }}
      />
    </Link>
  </Flex>
)

export default DownButton