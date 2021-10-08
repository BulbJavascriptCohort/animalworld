import local from "../../api/local_unsplash"

import {Container} from '@chakra-ui/react'
import Item from "../MenuItem"

function All(){
    console.log(local)
    let ItemElements = []
    for( let i = 0; i < local.length; i++){
        ItemElements.push(<Item image={local[i].urls.thumb} key={i} />)
    }
    return(
        <Container>
            {local.map((content) => <Item image={content.urls.thumb} key={content}  /> )}
        </Container>
    )
}

export default All;