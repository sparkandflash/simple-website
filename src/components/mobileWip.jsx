import { Image, Box, VStack,  Text } from '@chakra-ui/react'
import Contact from "./contact"
export default function MobileWip(){
return (
   
        <Box alignItems="center">
             <VStack >
            
       
        <Image height="400px" src='../lsz.svg'/>
       
        <Text size="sm">open on desktop for full version</Text>
        <Contact />
      
        </VStack>
        
        </Box>
)
}