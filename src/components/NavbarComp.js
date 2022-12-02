import { Box, Button, Flex, HStack, IconButton, Image, Input, Link } from "@chakra-ui/react"
import logo from '../assets/logo.png'
import dots from '../assets/dots.png'
import { MdOutlinePersonOutline } from 'react-icons/md'

function NavbarComp() {
  return (
    <Flex p='1rem 14rem' direction='row' align='center' gap={8}>
        <HStack>
            <Link href="#">
                <Image src={logo} w='4rem' />
            </Link>
            {['Explore', 'Add', 'Advertise'].map((e,i) => (
                <Button key={i} color='blackAlpha.600' variant='text' >
                    {e}
                </Button>
            ))}

            <Button variant='text'>
                <Image src={dots} w='1rem' />
            </Button>
        </HStack>
        <Input placeholder='Search for the top Servers, Bots in Discord...' bg='blackAlpha.100' size='lg' fontSize='1rem' />
        <HStack>
            <IconButton icon={<MdOutlinePersonOutline fontSize='1.7rem'/>} bg='white' />
            <Button bg='#ff3366' >Login</Button>
        </HStack>
    </Flex>
  )
}

export default NavbarComp