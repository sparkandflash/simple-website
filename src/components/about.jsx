//add about me
import galleryData from '../galleryData';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
export default function AboutMe() {
    return (
        <div><Flex>
        <Box width="20%" >
       
        </Box>
        
        <Spacer />
        
        <Box width="80%" p='5'>

        <Box alignContent="bottom" h="6em" paddingTop="6em" ><Text>
        {galleryData.about}
        </Text>
           
       </Box>
        </Box>
       
      </Flex>
            
        </div>
    )
}