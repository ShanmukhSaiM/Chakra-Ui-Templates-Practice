import { Box } from "@chakra-ui/react";
import MainComp from "./components/MainComp";
import NavbarComp from "./components/NavbarComp";


function App() {
  return (
    <Box>
      <NavbarComp />
      <MainComp />
    </Box>
  );
}

export default App;
