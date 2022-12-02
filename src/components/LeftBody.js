import { Box, Card, Flex, Grid, GridItem, Heading, HStack, Image, Stack, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react'
import { StarIcon,TriangleUpIcon } from '@chakra-ui/icons'
import { MdSignalCellularAlt } from 'react-icons/md'
import { IoShareOutline } from "react-icons/io5";

function LeftBody() {

    const data = [
        {
            img: 'https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F646937666251915264%2F0e54d87446f106d1fd58385295ae9deb.png%3Fsize%3D128&w=128&q=75',
            name: 'Karuta',
            rating: '4.2',
            number: '673,654',
            tag1: 'Anime',
            tag2: 'Art',
            tag3: '+10',
            vote: '126.3K',
            desc: 'GAMEPLAY UPDATE SOON! 📜 Over 90,000 anime characters as cards! Collect, trade, upgrade, customize, and more in a global economy.'
        },
        {
            img: 'https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F574652751745777665%2F4e69fb9ac96ca9a6bcb98e20a9cc2259.png%3Fsize%3D128&w=128&q=75',
            name: 'Virtual Fisher',
            rating: '4.6',
            number: '178,075',
            tag1: 'Econamy',
            tag2: 'Fun',
            tag3: '+4',
            vote: '3.2K',
            desc: 'Virtual Fisher is a discord game focused on fishing: collect fish, sell them to buy upgrades, compete with your friends, and more!'
        },
        {
            img: 'https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F812323565012647997%2Ffaeb1477c7e1d1067936971f519d0fb0.png%3Fsize%3D128&w=128&q=75',
            name: 'WaifuGame',
            rating: '4.5',
            number: '11,440',
            tag1: 'Anime',
            tag2: 'card game',
            tag3: '+10',
            vote: '3.3K',
            desc: '🌸 Anime Card Collection & Party Builder 🥳 OVER 350,000 CARDS! 🤩 Bring Cards to life and Level em Up thru "Companionship"! 😏'
        },
        {
            img: 'https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F432610292342587392%2F29cb28fbf65a3958105026ab03abd306.png%3Fsize%3D128&w=128&q=75',
            name: 'Mudae',
            rating: '4.5',
            number: '673,654',
            tag1: 'Anime',
            tag2: 'Fun',
            tag3: '+1',
            vote: '146.8K',
            desc: 'GAMEPLAY UPDATE SOON! 📜 Over 90,000 anime characters as cards! Collect, trade, upgrade, customize, and more in a global economy.'
        },
        {
            img: 'https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F270904126974590976%2Fd60c6bd5971f06776ba96497117f7f58.png%3Fsize%3D128&w=128&q=75',
            name: 'Lofi Radio',
            rating: '4.8',
            tag1: '24/7music',
            tag2: 'Anime',
            tag3: '+7',
            vote: '853',
            desc: 'High quality Lo-Fi Radio bot that plays 24/7, for FREE!'
        }
    ]

  return (
    
        data.map((e,i) => (
            <Card key={i} variant='filled' mb='0.2rem' p='1.5rem' direction='row' gap={8} bg='blackAlpha.100' align='center' > 
        <Image
            borderRadius='full'
            boxSize='110px'
            src={e.img}
            alt='Dan Abramov'
        />
        <Box>
            <Grid templateColumns='repeat(6, 1fr)' gap={2} py='1rem'>
                <GridItem colSpan={3}>
                    <Stack direction='column' gap={1}>
                        <Heading fontSize='1.5rem' fontWeight={500}>
                            {e.name}
                        </Heading>
                        <Stack direction='row' justify='space-between' >
                            <HStack>
                                <HStack>
                                    <StarIcon color='#edc1cc' stroke='#ff3366' />
                                    <Text fontSize='sm'>{e.rating}</Text>
                                </HStack>
                                <HStack>
                                    <MdSignalCellularAlt color='#edc1cc' stroke='#ff3366' />
                                    <Text fontSize='sm'>{e.number}</Text>
                                </HStack>
                            </HStack>
                            <HStack>
                                <Tag bg='blackAlpha.200'>{e.tag1}</Tag>
                                <Tag bg='blackAlpha.200'>{e.tag2}</Tag>
                                <Tag bg='blackAlpha.200'>{e.tag3}</Tag>
                            </HStack>
                        </Stack>
                </Stack>
                </GridItem>
                <GridItem  colStart={6}>
                    <HStack>
                        <Tag bg='blackAlpha.200' size='lg' fontSize='1rem' p='0.5rem 1rem'>Invite</Tag>
                        <Tag bg='blackAlpha.200' size='lg' fontSize='1rem' p='0.5rem 1rem'>
                            <TagLeftIcon boxSize='12px' as={TriangleUpIcon} />
                            <TagLabel>Vote({e.vote})</TagLabel>
                        </Tag>
                        <Tag bg='blackAlpha.200' size='lg' fontSize='1rem' p='0.5rem 1rem'>
                            <IoShareOutline />
                        </Tag>
                    </HStack>
                </GridItem>
            </Grid>
            <Text fontSize='sm'>{e.desc}</Text>
        </Box>
            </Card>
        ))
    
  )
}

export default LeftBody