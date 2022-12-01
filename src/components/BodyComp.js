import { 
    Box, 
    Button, 
    Card, 
    Checkbox, 
    Heading, 
    HStack, 
    Input, 
    InputGroup, 
    InputLeftElement, 
    Select, 
    Stack, 
    Text
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"


function BodyComp() {
  return (
    <Box p='2rem 7rem'>
        <Box position='relative'>
            <Card 
                position='absolute'
                bottom='16rem'
                left='2rem'
                width='14rem' 
                textAlign='center' 
                p='0.5rem' 
                borderRadius={0} 
                bg='#313f48'
            >
                <Text 
                    textTransform='uppercase'
                    fontWeight={700}
                    color='#55bfe1'
                >
                    start your job search
                </Text>
            </Card>

            <Box bg='#f1f4f3' p= '3rem 2rem' pb='0rem'  >
                <Stack spacing={4}>
                    <HStack>
                        <InputGroup justifyContent='center'>
                            <InputLeftElement
                            pointerEvents='none'
                            justifyContent='center'
                            children={<SearchIcon size='lg' mt='0.6rem' />}
                            />
                            <Input 
                            size='lg'
                                type='text' 
                                placeholder='WHAT JOB ARE YOU LOOKING FOR?'
                                _placeholder={{ color: 'black' }}
                                borderColor='#d4d9d7'
                                borderWidth={2}
                                bg='white'
                                borderRadius={0}
                                fontSize={15}
                                fontWeight={600}
                            />
                        </InputGroup>
                        <Button
                            textTransform='uppercase'
                            backgroundColor='#75d34e'
                            color='white'
                            size='lg'
                            borderRadius={0}
                            fontSize={15}
                            fontWeight={700}
                        >
                            search
                        </Button>
                    </HStack>

                    <HStack>
                        <Input 
                            placeholder='SEARCH CITY, STATE OR ZIP' 
                            _placeholder={{ color: 'black' }}
                            size='lg' 
                            borderRadius={0}
                            bg='white'
                            borderColor='#d4d9d7'
                            borderWidth={2}
                            fontSize={15}
                            fontWeight={600}
                        />

                        {['Technical skill(s)', 'Employment type(s)'].map((e,i) => (
                            <Select 
                                key={i} 
                                size='lg'
                                placeholder={e}
                                borderRadius={0}
                                textTransform='uppercase'
                                bg='white'
                                borderColor='#d4d9d7'
                                borderWidth={2}
                                fontSize={15}
                                fontWeight={600}
                            ></Select>
                        ))}
                    </HStack>

                    <Stack pt='2rem'>
                        <Checkbox size='lg' iconColor="#d4d9d7" >
                            <Text textTransform='uppercase' fontSize='sm'>
                                Intrested in 100% remote roles outside my current location.
                            </Text>
                        </Checkbox>

                        <Button 
                            variant='text' 
                            textTransform='uppercase' 
                            fontSize='0.7rem' 
                            justifyContent='end' 
                            color='GrayText' 
                        >
                            Clear all
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Box>

        <Box py='1rem'>
            <Heading fontSize='1.8rem' fontWeight={900} py='1rem' color= '#5a656d'>
                National market Insights for Software Recruiting
            </Heading>

            <Text fontFamily= 'Work Sans' color= 'GrayText' fontSize='1.8rem'>
                Recruitment trends are the backbone of how we work. Our teams research and share local marketplace intel as part of our everyday routine and data-driven approach to produce results.
            </Text>
        </Box>
    </Box>
  )
}

export default BodyComp