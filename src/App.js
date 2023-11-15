import Left from "./components/left"
import Right from "./components/right"
import Contact from "./components/contact"
import { Flex, Spacer, Box, Center, useMediaQuery } from '@chakra-ui/react'
function App() {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  return (
    <div>
      <Box height="4em">
        <Center><Contact /></Center>
        </Box>

<Flex>
  <Box width="25%" p='4'>
  <Left /> 
  </Box>
  
  <Spacer />
  
  <Box width="75%" p='5'>
  <Right />
  </Box>
 
</Flex>

    </div>
  );
}

export default App;
