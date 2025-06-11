import { Center, Heading, Box, VStack, Text, Divider, Link, HStack } from '@chakra-ui/react'
import Contact from './common/contact'
export default function Home() {
    return (

        <Center bgColor="black" h="100vh">
            <title>Varnexo Atyren - home</title>
            <VStack h="100vh" width="100vw">
                <Box
                    position="relative"
                    h="60%"
                    width="80%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                >
                    {/* Background Artwork */}
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        bgImage="/artworks/19.jpeg"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        zIndex={0}
                    />

                    {/* Blended PNG Overlay */}
                    <Box
                        position="relative"
                        zIndex={1}
                        h="60%"
                        width="80%"
                        backgroundImage="url('/varnexo-atyren.png')"
                        backgroundSize="contain"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                        mixBlendMode='hard-light' // 👈 this blends with the bg
                    />
                </Box>
               
                <HStack gap="10">
                    <Box>
                        <Link href="https://gallery.varnexo.in"> <Text>Art Gallery</Text></Link>
                    </Box>
                    <Box>
                        <Text color="gray.400">Map</Text>
                    </Box>
                    <Box>
                        <Text color="gray.400">Lore</Text>
                    </Box>
                    <Box>
                        <Text color="gray.400">Characters</Text>
                    </Box>
                    <Box>
                        <Link href="https://lsz.varnexo.in"> <Text>Creator - LSZ</Text></Link>
                    </Box>
                </HStack>
                 <Divider borderColor="black" my="30px" width="80%" />
                <Contact iconColor="white" />
            </VStack>
        </Center>
    )
}