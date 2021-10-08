
import {Accordion, Link as L, Box, Text, Center,  Flex, Image} from '@chakra-ui/react'
import { ImFire, ImStarEmpty, ImStarFull } from 'react-icons/im';



function Item(props) {
    return (
        <Center>
            <Box borderWidth="2px" >
                <Image borderRadius="md" src={props.image} />    
                <Flex align="center"> 
                <L href="https://www.yelp.com/biz/gotts-roadside-san-francisco-9"  > <Text fontWeight="bold">Gott's Roadside</Text> </L>
                </Flex>
                <Flex align="center" mt={1}>
                    <ImStarFull color="tomato"/>
                    <ImStarFull color="tomato"/>
                    <ImStarFull color="tomato"/>
                    <ImStarFull color="tomato" />
                    <ImStarEmpty />
                    <Text>12 reviews</Text>
                </Flex>
                <Flex> 
                    <Text>Tacos, Burgers, American ( Traditional ) </Text>
                </Flex>
                <Flex> <Text> Mission Bay </Text> </Flex>
                <Flex align="baseline" color="#f15c00"> 
                    <ImFire /> <Text>Opened 4 weeks ago</Text>
                </Flex>
            </Box>
        </Center>
    )
}
export default Item;