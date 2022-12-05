import { Box, Button, Card, Flex, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement, Spacer } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { ChevronDownIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'
import { BsGlobe } from "react-icons/bs";


function NavbarComp() {
  return (
    <Card borderRadius='0'>
        <Flex p='1rem 2rem'>
            <HStack spacing={1}> 
                <Image src={logo} w='2rem' />
                {
                    ['Use Ethereum', 'Learn', 'Developers', 'Enterprise', 'Community'].map((e,i) => (
                        <Button key={i} rightIcon={<ChevronDownIcon mt='5px' />} variant='text' fontWeight='normal'>{e}</Button>
                    ))
                }
            </HStack>
            <Spacer />
            <HStack spacing={1}>
                <InputGroup size='lg' w='15rem'>
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        children={<SearchIcon color='gray.300' />}
                    />
                    <Input placeholder='Search' />
                    <InputRightElement w='1.1rem' h='1.7rem' m='10px' children='/' border={'1px solid gray'} borderRadius='5px' />
                </InputGroup>
                <IconButton variant='ghost' icon={<MoonIcon fontSize='1.5rem' />} />
                <Button leftIcon={<BsGlobe />} variant='text' fontWeight='normal'>Languages</Button>
            </HStack>
        </Flex>
    </Card>
  )
}

export default NavbarComp