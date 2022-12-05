import { Box, Flex } from "@chakra-ui/react"
import LeftComp from "./LeftComp"
import RightComp from "./RightComp"


function MainComp() {
  return (
   <Box p='1rem 2.2rem'>
        <Flex gap={5}>
            <LeftComp />
            <RightComp />
        </Flex>
   </Box>
  )
}

export default MainComp