
import Desktop from "./components/desktop";
import MobileWip from "./components/mobileWip";
import Home from "./components/home"

import {  useMediaQuery} from '@chakra-ui/react'
import Gallery from "./components/gallery";
function App() {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  if (window.location.host.split(".")[0] === "lsz") {
    return (
      <div>
  {isLargerThan900? <Desktop />: <MobileWip />}
      </div>
    );
  }
  else if (window.location.host.split(".")[0] === "gallery") {
  return (
    <div> <Gallery /></div>
  )
  }
  else {
    return (
      <div>
        <Home />
      </div>
    );
  }

}

export default App;
