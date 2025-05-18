import galleryData from '../galleryData';
import { Image, Grid, GridItem, Center, Box, VStack } from '@chakra-ui/react'
export default function Gallery() {
    return (
        <div>
            <Box p="10px" >
                <Center>
                    <VStack >
                        <Box bgColor="gray" width="100%" h="30px" zIndex="1" postion="fixed">Varnexo Atryren Artworks</Box>
                        <Grid templateColumns='repeat(3, 1fr)' gap={5} >
                            {
                                galleryData.artworks && galleryData.artworks.map(item => {
                                    return (
                                        <GridItem key={item.url} borderRadius="5%" bgColor="gray.500" borderColor="black" overflow="hidden" position="relative" h="325px">
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                p="5px"
                                                h="325px"
                                                borderRadius="5%"
                                                _before={{
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    w: '100%',
                                                    h: '100%',
                                                    backgroundImage: `url(${item.url})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    filter: 'blur(1px)',
                                                    zIndex: 0,
                                                    blendMode: 'color-dodge',
                                                    opacity: '70%'
                                                }}
                                            >
                                                <Image
                                                    src={item.url}
                                                    zIndex={1}
                                                    borderRadius="5%"
                                                    maxH="100%"
                                                    maxW="100%"
                                                    objectFit="contain"
                                                />
                                            </Box>
                                        </GridItem>
                                    )
                                }
                                )
                            }
                        </Grid>
                        {/*   <Text fontSize='md'  color='gray.500'>visit my <Link color='teal.500' href='https://www.instagram.com/lsz.art/'>instagram</Link> for more artworks</Text>*/}
                    </VStack>
                </Center>
            </Box>
        </div>
    )
}