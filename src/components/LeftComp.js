import { Button, Card, Divider, Flex, List, ListIcon, ListItem, Radio, RadioGroup, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import { BsArrowCounterclockwise, BsLayersHalf } from "react-icons/bs";
import { ImTarget } from "react-icons/im";
import { TbCurrencyEthereum, TbContainer } from "react-icons/tb";
import { BiDownArrowCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function LeftComp() {
  return (
    <Flex direction='column' overflowY='scroll' maxWidth='21rem' gap={2}>
      <Tabs >
        <TabList>
          <Tab p='0.7rem 1.5rem'  _selected={{ color: 'white', bg: '#1c1cff',fontWeight:'normal', borderRadius:'5px 0 0 0 ' }}>Profile Filters</Tab>
          <Tab p='0.7rem 1.5rem' variant='text' fontWeight='normal'>Feature Filters(0)</Tab>
        </TabList>
        <Divider bg='#1c1cff' />
      <Button ml='7rem' mt='1rem' alignItems='center' justifyContent='center' variant='text' size='xs' color='#1c1cff' fontWeight='normal' leftIcon={<BsArrowCounterclockwise />} textTransform='uppercase' > 
          reset filters
      </Button>
      <TabPanels>
        <TabPanel p='0'>
        <Text color={'gray.400'} align='center' p='0.5rem 1rem'  fontSize='sm' >Choose the profile that matches your type of user and filter the wallet list</Text>
      <RadioGroup>
        <VStack>
          <Card p='1.5rem' bg='#d1d1ff'>
            <Radio value='New to crypto' size='lg' borderColor='black' fontWeight={700} px='1rem' >
              <Text fontWeight={600}>New to crypto</Text>
            </Radio>
            <Divider my='1rem' />
            <Text color='blackAlpha.600' p='0 0.5rem'>You are a first time user looking for your first wallet</Text>
            <List display='grid' gridTemplateColumns='50% 50%' pt='1rem' spacing={1} alignItems='center' justifyContent='space-between' gap={3}>
              {[[ImTarget, 'Connect to apps'], [BsLayersHalf, 'Layer 2'], [TbCurrencyEthereum, 'ENS support'], [BiDownArrowCircle, 'Token support'], [AiOutlineShoppingCart, 'Buy crypto'], [TbContainer, 'Free optimization']].map((e,i) => (
                <ListItem key={i} alignItems='start' fontSize='sm'>
                  <ListIcon as={e[0]}/>
                  {e[1]}
                </ListItem>
              ))}
            </List>
          </Card>
          <Card p='1.5rem' bg='#d1d1ff'>
            <Radio value='NFTs' size='lg' borderColor='black' fontWeight={700} px='1rem' >
              <Text fontWeight={600}>NFTs</Text>
            </Radio>
            <Divider my='1rem' />
            <Text color='blackAlpha.600' p='0 0.5rem'>You are someone that is all about NFTs and want a wallet with NFT support</Text>
            <List display='grid' gridTemplateColumns='50% 50%' pt='1rem' spacing={1} alignItems='center' justifyContent='space-between' gap={3}>
              {[[TbCurrencyEthereum, 'NFT support'], [BsLayersHalf, 'Layer 2'], [ImTarget, 'Connect to apps'],].map((e,i) => (
                <ListItem key={i} alignItems='start' fontSize='sm'>
                  <ListIcon as={e[0]}/>
                  {e[1]}
                </ListItem>
              ))}
            </List>
          </Card>
        </VStack>
      </RadioGroup>
      </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
    </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default LeftComp