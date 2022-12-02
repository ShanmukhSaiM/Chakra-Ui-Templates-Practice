import { Box, Button, HStack, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Select, Stack, Text } from '@chakra-ui/react'
import { Search2Icon, StarIcon } from '@chakra-ui/icons'

function RightBody() {

    const reset = <Button variant='text' color='#ff3366'>Reset</Button>
    const searchIcon = <Search2Icon color='#ff3366'  mt='0.5rem' />
    const star = <StarIcon stroke='#ff3366' color='white' fontSize='xl' />

  return (
    <Box>
        <Stack direction='column' justify='center' gap={5} mb='4rem'>
            <Stack direction='row' justifyContent='space-between' align='center'>
                <Text fontSize='2xl' fontWeight={500} >Sorting</Text>
                {reset}
            </Stack>
            <Select size={'lg'} bg={'blackAlpha.100'} placeholder='Top' />
        </Stack>

        <Stack direction='column' justify='center' gap={5} mb='4rem'>
            <Stack direction='row' justifyContent='space-between' align='center'>
                <Text fontSize='2xl' fontWeight={500} >Categories</Text>
                {reset}
            </Stack>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={searchIcon}
                />
                <Input size={'lg'} type='text' placeholder='Search for categories' bg={'blackAlpha.100'} />
            </InputGroup>
        </Stack>

        <Stack direction='column' justify='center' gap={5} mb='4rem'>
            <Stack direction='row' justifyContent='space-between' align='center'>
                <Text fontSize='2xl' fontWeight={500} >Languages</Text>
                {reset}
            </Stack>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={searchIcon}
                />
                <Input size={'lg'} type='text' placeholder='Search for languages' bg={'blackAlpha.100'} />
            </InputGroup>
        </Stack>
        <Stack direction='column' justify='center' gap={5} mb='4rem'>
            <Stack direction='row' justifyContent='space-between' align='center'>
                <Text fontSize='2xl' fontWeight={500} >Reviews</Text>
                {reset}
            </Stack>
            <HStack>
                {star}
                {star}
                {star}
                {star}
                <Text fontSize='md' color='gray' >& Up</Text>
            </HStack>
        </Stack>
        <Stack direction='column' justify='center' gap={5} mb='4rem'>
            <Stack direction='row' justifyContent='space-between' align='center'>
                <Text fontSize='2xl' fontWeight={500} >Total Invites</Text>
                {reset}
            </Stack>
            <RadioGroup defaultValue='1'>
                <Stack>
                    <Radio size='lg' value='1' colorScheme='orange'>
                        All
                    </Radio>
                    <Radio size='lg' value='2' colorScheme='orange'>
                        100
                    </Radio>
                    <Radio size='lg' value='3' colorScheme='orange'>
                        100 - 10000
                    </Radio>
                </Stack>
            </RadioGroup>
        </Stack>
    </Box>
  )
}

export default RightBody