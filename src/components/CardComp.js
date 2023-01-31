import { Badge, Box, Card, CardBody, Heading, HStack, Image, Link, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import img1 from '../assets/img1.svg'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.svg'
import img4 from '../assets/img4.svg'

function CardComp() {
    const data = [
        {
            img: img1,
            title: 'Introduction to JavaScript',
            txt1: 'courses - 1',
            txt2: '6 lessons',
            txt3: '1hour 12min',
            badge: <Badge bg='#F59E0B' px='10px' fontSize='lg' color='#fff' borderRadius='5px' textTransform='none'>Free</Badge>,
            text: 'In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare.',
        },
        {
            img: img2,
            title: 'JavaScript Beginning',
            txt1: 'courses - 2',
            txt2: '4 lessons',
            txt3: '32min',
            text: 'Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada.',
        },
        {
            img: img3,
            title: 'Variables and Constants',
            txt1: 'courses - 3',
            txt2: '8 lessons',
            txt3: '10min',
            text: 'Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs.',
        },
        {
            img: img4,
            title: 'Types and Operators',
            txt1: 'courses - 4',
            txt2: '10 lessons',
            txt3: '32min',
            text: 'In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl.',
        }
    ]
  return (
    <SimpleGrid columns={2} spacing={6} py='3rem'>
        {data.map((e,i) => (
            <Card key={i} variant='elevated'>
                <CardBody p='2rem 4rem 2rem 2rem'>
                    <HStack direction='row' gap={1}>
                        <Image
                            borderRadius='full'
                            p='0.3rem'
                            bg='#754FFE'
                            boxSize='70px'
                            objectFit='cover'
                            src={e.img}
                        />
                        <Stack direction='column'>
                            <Text fontSize='3xl' fontWeight='700'>{e.title}</Text>
                            <HStack gap={2}>
                                <Text textTransform='uppercase' fontSize='sm' fontWeight={600}>{e.txt1}</Text>
                                <Text textTransform='uppercase' fontSize='sm' color='gray.500' fontWeight={600}>{e.txt2}</Text>
                                <Text textTransform='uppercase' fontSize='sm' color='gray.500' fontWeight={600}>{e.txt3}</Text>
                            </HStack>
                        </Stack>
                            {e.badge ?? e.badge}
                    </HStack>
                    <Text color='gray.600' py='1.5rem'>{e.text}</Text>
                    <Link textDecoration='underline' color='#754FFE' fontWeight={600}>View Chapter Details +</Link>
                </CardBody>
            </Card>
        ))}
    </SimpleGrid>
  )
}

export default CardComp