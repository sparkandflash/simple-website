//add social media

import {  Box, Spacer, HStack, useMediaQuery, Flex} from '@chakra-ui/react'
import React from 'react';
import galleryData from '../galleryData';

export default function Contact() {
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
    return (
        <div>
        {isLargerThan900? 
        <Flex>
          <Box width="20%" ></Box>
       <Spacer />
       <Box paddingLeft="10px" width="80%" >
      <HStack>
                {
                    galleryData.socialLinks && galleryData.socialLinks.map(item => {
                        return (
                       
                            <Box className='social' key={item.name}>
                                <a href={item.url} target=''><i className={item.className}></i></a>
                            </Box>
                          
                        )
                    }
                    )
                }
                </HStack>
             </Box>
</Flex>
: <Flex> <Box paddingLeft="10px" >
<HStack>
          {
              galleryData.socialLinks && galleryData.socialLinks.map(item => {
                  return (
                 
                      <Box className='social' key={item.name}>
                          <a href={item.url} target=''><i className={item.className}></i></a>
                      </Box>
                    
                  )
              }
              )
          }
          </HStack>
       </Box></Flex>}
        </div>

    );
}
