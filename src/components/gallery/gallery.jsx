import galleryData from '../../galleryData';
import {
    Image, Grid, GridItem, Center, Box, Text, VStack, Modal,
    ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
    useDisclosure,

} from '@chakra-ui/react'
import Header from './header'
import { useState } from 'react';
import Contact from '../common/contact';
export default function Gallery() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (item) => {
        setSelectedImage(item);
        onOpen();
    };
    return (
        <div>
            <title>Varnexo Atyren - art gallery</title>
            <Box p="10px" >
                <Center>
                    <VStack >
                        <Header />
                        <Grid templateColumns='repeat(3, 1fr)' gap={3} >
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
                                                    borderRadius="1%"
                                                    maxH="100%"
                                                    maxW="100%"
                                                    objectFit="contain"
                                                    onClick={() => handleOpen(item)}
                                                />


                                            </Box>
                                        </GridItem>


                                    )
                                }
                                )
                            }
                        </Grid>
                        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
                            <ModalOverlay />
                            <ModalContent
                                maxW="90vw"
                                maxH="90vh"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                bgColor="gray.800"
                                opacity="50%"

                            >
                                <ModalCloseButton color="white" />

                                <ModalBody
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    p="20px"
                                    marginBlockStart="20px"
                                >
                                    {selectedImage && (
                                        <>
                                            <Image
                                                src={selectedImage.url}
                                                borderRadius="5%"

                                                maxH="80vh"
                                                maxW="80vw"
                                                p="10px"
                                                objectFit="contain"
                                            />
                                            <Text mt={4} textAlign="center">
                                               {selectedImage.desc}
                                            </Text>
                                        </>
                                    )}
                                </ModalBody>
                            </ModalContent>
                        </Modal>

                    </VStack>
                </Center>
            </Box>
        </div>
    )
}
