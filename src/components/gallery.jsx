import galleryData from '../galleryData';
import {  Image, Grid, GridItem, Center, Text, Link, VStack} from '@chakra-ui/react'
export default function Gallery(){
    return( 
    <div>
        <Center>
            <VStack>
        <Grid templateColumns='repeat(3, 1fr)' gap={5} >
            {
                   galleryData.artworks && galleryData.artworks.map(item => {
                        return (
                       
                         
                                <GridItem key={item.url}><Image  boxSize='250px' src={item.url} /></GridItem>
                              
        
                           
                          
                        )
                    }
                    )
                }
                </Grid>
                <Text fontSize='md'  color='gray.500'>visit my <Link color='teal.500' href='https://www.instagram.com/lsz.art/'>instagram</Link> for more artworks</Text>
                </VStack>
                </Center>
               
     </div>
    )
}