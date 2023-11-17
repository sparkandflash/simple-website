//add two tabs- projects and art gallery
import Gallery from "./gallery"
import Projects from "./projects"

import { Tabs, TabList, Divider, TabPanels, TabIndicator, Box, Tab, TabPanel } from '@chakra-ui/react'
export default function Right() {
  return (
    <div>

      <Box borderWidth='1px' borderRadius='lg'>
        <Tabs variant="unstyled" size='md' >

          <TabList>
            <Tab>Projects</Tab>
            <Tab>Art gallery</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg='blue.300'
            borderRadius="1px"

          />
          <Divider />
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