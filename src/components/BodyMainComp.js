import { Box, Grid, GridItem, VStack } from '@chakra-ui/react'
import React from 'react'
import LeftBody from './LeftBody'
import RightBody from './RightBody'

function BodyMainComp() {
  return (
    <Box bg='blackAlpha.50'>
        <Grid 
            px='14rem'
            templateColumns='repeat(6, 1fr)'
            gap='2rem'
        >
            <GridItem colSpan={4}>
                <LeftBody />
            </GridItem>

            <GridItem colSpan={2}>
                <RightBody />
            </GridItem>
        </Grid>
    </Box>
    
  )
}

export default BodyMainComp