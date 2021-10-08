import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background: darkblue;
`


function SheepList(){
    return(
        <section>
            <Link to="/" >Home </Link>
            <h1>Sheep</h1>
            <Button />
            <img alt="sheep" src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" ></img>
        </section>
    )
}

export default SheepList;