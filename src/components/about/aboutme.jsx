import galleryData from '../../galleryData';
import React, { useState, useEffect } from 'react';
import { Grid, VStack, Image, Box, Text, GridItem, Link, HStack } from '@chakra-ui/react'
import Contact from '../common/contact';
export default function Aboutme() {
    const [childHeight, setChildHeight] = useState(0);

    useEffect(() => {
        // Get the actual height of the child component
        const childElement = document.getElementById('child-component');
        if (childElement) {
            setChildHeight(childElement.clientHeight);
        }
    }, []);
    return (
        <div>
             <title>LSZ</title>
            <Box p={5}>
                <VStack width="100%">

                    <HStack width="100%">

                        <Box id="child-component"
                            height="150px"
                            width="70%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end">
                            <Text>
                                {galleryData.about}
                            </Text>
                        </Box>
                        <Box

                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-end"
                            alignItems="flex-end"
                            width="30%"
                        > <Image height={childHeight} display="flex" src='./lsz.svg' /> </Box>

                    </HStack>

                    <Box p="10px" width="100%" borderWidth='1px' borderRadius='lg'>
                        <Text fontWeight="bold">what I do best:</Text>
                        <Grid templateColumns='repeat(1, 1fr)' gap={5} >
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
                                                {item.links === '' ? "" : <Link fontSize='sm' color='teal.500' href={item.links}>{item.linksName}</Link>}

                                            </Box>
                                        </GridItem>
                                    )
                                }
                                )
                            }
                        </Grid>
                    </Box>
                    <Box id="child-component"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end">
                        <Contact />
                    </Box>
                </VStack>
            </Box></div>
    )
}