import {Link} from 'react-router-dom'
import {Accordion, Link as L, Box, Text, Modal, Container,Center, Spacer, Flex, Image} from '@chakra-ui/react'
import { ImFire, ImStarEmpty, ImStarFull } from 'react-icons/im';
import Item from "../MenuItem";
function ElephantList(){
    return(
        <Container>
            <Flex flex="1">
                <Image src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" />
                <Spacer />
                <Image src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" />
            </Flex>
            <Center>
                <Image borderRadius="md" src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" />
            </Center>
            <Item />           
        </Container>

    )
}

export default ElephantList;