import Right from "./right";
import AboutMe from "./about";
import React, { useState, useEffect } from 'react';
import Contact from "./contact"
import { Flex, Spacer, Box, Image} from '@chakra-ui/react'
export default function Desktop() {
  

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

<AboutMe />
<Flex>
  <Box  width="20%" >
  
  <Image height={childHeight} display="flex"  src='./lsz.svg'/>

  </Box>
  
  <Spacer />
  
  <Box  id="child-component" width="75%" p='0.5em'>
  <Right/>
  </Box>
 <Box width="5%"></Box>
</Flex>
<Contact /> 

    </div>
  );
}

