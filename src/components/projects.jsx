import galleryData from '../galleryData';
import { Grid, Box, GridItem, Center, Link } from '@chakra-ui/react'
export default function Projects() {
    return (
        <div><Center>
            <Grid templateColumns='repeat(2, 1fr)' gap={5} >
                {
                    galleryData.projects.map(item => {
                        return (


                            <GridItem key={item.name}>
                                <Box align='start'>
                                    <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h4'
                                        lineHeight='tight'
                                        noOfLines={1}
                                    >
                                        {item.name}
                                    </Box>
                                    <Box
                                        color='gray.500'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        
                                    >
                                        {item.description}
                                    </Box>
                                    {item.links === ''? "":  <Link   fontSize='sm' color='teal.500' href={item.links}>github</Link> }
                                  
                                </Box>
                            </GridItem>




                        )
                    }
                    )
                }
            </Grid>

        </Center></div>
    )
}