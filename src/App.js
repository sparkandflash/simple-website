
import Desktop from "./components/desktop";
import MobileWip from "./components/mobileWip";



import {  useMediaQuery} from '@chakra-ui/react'
function App() {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  
  return (
    <div>
{isLargerThan900? <Desktop />: <MobileWip />}


    </div>
  );
}

export default App;
