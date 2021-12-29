import {
  Text,
  Flex
} from '@chakra-ui/react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

const Index: React.FC = () => (
  <>
    <Flex justifyContent="center" p={10}>
      <Text className="puritan" fontSize="3xl">This is be-fit.</Text>
    </Flex>
    <DarkModeSwitch />
  </>
)

export default Index
