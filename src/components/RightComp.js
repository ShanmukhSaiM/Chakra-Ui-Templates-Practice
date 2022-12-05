import { Box, Button, Flex, HStack, IconButton, Image, Select, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import myCrypto from '../assets/mycrypto.webp'
import { BsGlobe, BsTwitter } from "react-icons/bs";
import { CheckCircleIcon, ChevronUpIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { IoMdSave } from "react-icons/io";
import { FaGoogleWallet, FaNetworkWired, FaHandsHelping } from "react-icons/fa";
import { ImTarget } from "react-icons/im";
import { RiOpenSourceLine } from "react-icons/ri";
import { MdThumbsUpDown } from "react-icons/md";

function RightComp() {
  return (
    <Box position={'relative'}>
      <TableContainer overflowY='scroll' w='100%'>
      <Table>
        <Thead position='sticky'>
          <Tr gap={1}>
            <Th px='0' textTransform='none' fontWeight='normal' fontSize='sm'>Showing all wallets (45)</Th>
            {['Buy crypto', 'Self custody', 'Layer 2'].map((e,i) => (
              <Th key={i}>
                <Select w='9rem' placeholder={e} />
              </Th>
            ))}
          </Tr>
         </Thead>
         <Tbody px='0'>
            <Tr  justifyContent='center'>
              <Td pl='0'>
                <Flex align='center' >
                  <Image src={myCrypto} w='3rem' />
                  <Stack>
                    <Text fontWeight='bold'>MyCrypto</Text>
                    <Text size='sm' color='gray.500'>Linux | Windows | macOS</Text>
                    <Stack direction='row' justify='left'>
                      <IconButton variant='ghost'>
                        <BsGlobe fontSize='1.4rem' color='#1c1cff' />
                      </IconButton>
                      <IconButton variant='ghost'>
                        <BsTwitter color='#1da1f2' fontSize='1.4rem' />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Flex>
              </Td>
              <Td textAlign='center'>
                <CheckCircleIcon color='#109e62' />
              </Td>
              <Td textAlign='center'>
                <CheckCircleIcon color='#109e62' />
              </Td>
              <Td textAlign='center'>
                <CheckCircleIcon color='#109e62' />
              </Td>
              <Td textAlign='center'>
                <IconButton variant='ghost'>
                  <ChevronUpIcon color='#1c1cff' />
                </IconButton>
              </Td>
            </Tr>
        </Tbody>
      </Table>
      <Box p='1rem'>
        <Text color='#1c1cff' fontWeight={700} fontSize='lg' >Features</Text>
        <Flex flexWrap='wrap' gap={1} justify='start' align='center'>
          {[[<IoMdSave />, 'Hardware wallet support'], [<ImTarget />, 'Connect to dapps'], [<FaGoogleWallet />, 'WalletConnect'], [<FaNetworkWired />, 'RPC importing'], [<ImTarget />, 'Connect to dapps'],[<IoMdSave />, 'Hardware wallet support'], [<FaGoogleWallet />, 'WalletConnect'], [<FaNetworkWired />, 'RPC importing'], [<ImTarget />, 'Connect to dapps']].map((e,i) => (
            <HStack p='1rem' key={i}>
              {e[0]}
              <Text>{e[1]}</Text>
              <InfoOutlineIcon />
            </HStack>
          ))}
        </Flex>
      </Box>
      <Box px='1rem'>
        <Text color='#1c1cff' fontWeight={700} fontSize='lg' >Security</Text>
        <Flex flexWrap='wrap' gap={1} justify='start'>
          {[[<RiOpenSourceLine />, 'Open source'], [<FaHandsHelping />, 'Self custody']].map((e,i) => (
            <HStack p='1rem' key={i}>
              {e[0]}
              <Text>{e[1]}</Text>
              <InfoOutlineIcon />
            </HStack>
          ))}
        </Flex>
      </Box>
      
    </TableContainer>
      <Button position='absolute' bottom='14rem' left='38rem' zIndex={1}  borderRadius='20px' color='white' leftIcon={<MdThumbsUpDown fontSize='1.5rem' />} bg='#1c1cff' variant='solid'>
        Is this page helpful?
      </Button>
    </Box>
    
  )
}

export default RightComp
