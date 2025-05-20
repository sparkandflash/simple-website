import React from "react";
import Home from "./components/home";
import Gallery from "./components/gallery/gallery";
import Gallerymb from "./components/gallery/gallerymb";
import Aboutme from "./components/about/aboutme";
import { useMediaQuery } from '@chakra-ui/react';

function App() {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const subdomain = window.location.host.split(".")[0];

  const renderSubdomainApp = () => {
    switch (subdomain) {
      case "lsz":
        return <Aboutme />;

      case "gallery":
        return isLargerThan900 ? <Gallery /> : <Gallerymb />;

      default:
        return <Home />;
    }
  };

  return <div>{renderSubdomainApp()}</div>;
}

export default App;
