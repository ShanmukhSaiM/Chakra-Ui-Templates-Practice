import { Button, Flex, HStack, Image, Spacer, VStack } from "@chakra-ui/react"
import logo from '../assets/logo.svg'


function NavbarComp() {
  return (
        <Flex bg={"gray.700"} p='1rem 7rem'>
            <Image w='11rem' src={logo} />
            <Spacer />
            <VStack align='end' color={"gray.50"}  >
                <Button 
                    variant='outline' 
                    fontSize={10} 
                    size='small' 
                    p='0.3rem 0.5rem' 
                    borderRadius='0'
                >
                    Contractor Login
                </Button>
                
                <HStack>
                    {['About us', 'Client solutions', 'Job search', 'Insights', 'Tech In Motion™'].map((e,i) => (
                            <Button 
                                key={i} 
                                variant='text' 
                                textTransform='uppercase' 
                                fontWeight={400} 
                                fontSize={12}
                            >
                                {e}
                            </Button>
                        ))}
                </HStack>
            </VStack>
        </Flex>
  )
}

export default NavbarComp