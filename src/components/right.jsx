//add two tabs- projects and art gallery
import Gallery from "./gallery"
import Projects from "./projects"

import { Tabs, TabList, TabPanels, Box, Tab, TabPanel } from '@chakra-ui/react'
export default function Right() {
  return (
    <div>
      
      <Box borderWidth='1px' borderRadius='lg'>
        <Tabs  size='md' >
          <TabList>
            <Tab>Projects</Tab>
            <Tab>Art gallery</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Projects />
            </TabPanel>
            <TabPanel>
              <Gallery />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      
    </div>
  )
}