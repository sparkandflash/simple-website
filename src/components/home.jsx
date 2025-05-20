import { Center, Heading, Box, StackSeparator , VStack, Text, Link, HStack } from '@chakra-ui/react'
import React from 'react'
import Contact from './common/contact'

export default function Home() {
    return (
        <Center h="100vh">
            <VStack h="100vh" width="100vw">
                <Box h="60%" backgroundSize='cover'
                    backgroundPosition='center'
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="80%"
                    bgImage="/artworks/19.jpeg">
                    <Heading color="white">The Varnexo never ends</Heading>
                </Box>

                <HStack gap="10">
                    <Box>
                        <Link href="https://gallery.varnexo.in"> <Text>art gallery</Text></Link>
                    </Box>
                    <Box>
                        <Text color="gray.400">map</Text>
                    </Box>
                    <Box>
                        <Text color="gray.400">lore</Text>
                    </Box>
                    <Box>
                        <Text color="gray.400">characters</Text>
                    </Box>
                </HStack>
  <Contact />
            </VStack>
        </Center>
    )
}