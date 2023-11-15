//add two tabs- projects and art gallery
import Gallery from "./gallery"
import Projects from "./projects"
import AboutMe from "./about"
import { Tabs, TabList, TabPanels, Box, Tab, TabPanel } from '@chakra-ui/react'
export default function Right(){
    return(
        <div>
            <Box h="5em" ><AboutMe /></Box>
            <Box borderWidth='1px' borderRadius='lg'>
<Tabs align='end' size='md' >
  <TabList>
    <Tab>gallery</Tab>
    <Tab>Projects</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Gallery />
    </TabPanel>
    <TabPanel>
    <Projects />
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
        </div>
    )
}