import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import CardComp from "./components/CardComp";


function App() {
  return (
    <Stack direction='column' alignItems='center' bg='#E2E8F0' p='4rem 20rem' gap={3}>
      <VStack px='18rem' gap={2}>
        <Text 
          color='#754ffe' 
          fontWeight={600} 
          textTransform='uppercase' 
          fontSize='md' 
        >
          course description
        </Text>
        <Heading>What will you learn?</Heading>
        <Text color='#64748B' fontSize='2xl' noOfLines={2} textAlign= 'center'>Vanilla JS is fast, lightweight, cross-platformframework for building incredible, powerful JavaScript applications.</Text>
      </VStack>

      <CardComp />
    </Stack>
  );
}

export default App;
