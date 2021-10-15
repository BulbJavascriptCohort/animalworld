import { Container,Center, Spacer, Flex, Image} from '@chakra-ui/react'
import Item from "../MenuItem";


function EagleList(){
    return(
        <Container>
            <Flex flex="1">
                <Image src="https://images.unsplash.com/photo-1557401622-cfc0aa5d146c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" />
                <Spacer />
                <Image src="https://images.unsplash.com/photo-1557401622-cfc0aa5d146c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" />
            </Flex>
            <Center>
                <Image borderRadius="md" src="https://images.unsplash.com/photo-1557401622-cfc0aa5d146c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" />
            </Center>
            <Item />           
        </Container>

    )
}


export default EagleList
