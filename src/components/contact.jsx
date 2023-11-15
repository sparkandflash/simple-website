//add social media

import {  Box,  useMediaQuery, Flex,  MenuButton,
    Menu,
    MenuList,
    MenuItem,
Portal } from '@chakra-ui/react'
import React from 'react';
import galleryData from '../galleryData';

export default function Contact() {
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

    return (
<div>
{isLargerThan900? 
        <div>
        
        <Flex justifyContent={true}>
                
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
            
</Flex>

        </div>
: <div id='contact-button'>

<Menu>
  <MenuButton >
social media
  </MenuButton>
  <Portal>
  <MenuList minW='48px'>
  {
                                    galleryData.socialLinks && galleryData.socialLinks.map(item => {
                                        return (
                                            <MenuItem   key={item.name}>
                                                <a href={item.url} target=''><i className={item.className}></i></a>
                                            </MenuItem>
                                        )
                                    }
                                    )
                                }
    
  </MenuList>
  </Portal>
</Menu>

        </div>}
        </div>
    );
}