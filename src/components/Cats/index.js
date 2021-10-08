import {Link} from 'react-router-dom'
// import { getCatBreeds, addition }  from '../../api/unsplash';
import { useState, useEffect } from 'react'


function CatList(){
    const endPointBreed  = "https://api.thecatapi.com/v1/breeds"
    const [breeds, setBreeds] = useState(null)
    
    useEffect(() => {
        fetch( endPointBreed )
        .then( function(r){
            // did I successfully connect
            if ( !r.ok ){
                throw new Error(`Unable to talk to cat server ${r.status}`)  
            } 
            return r.json() 
        })
        .then( (data) => {
            // what do I want to do with the data
            console.log(data)
            setBreeds(data)
            console.log(breeds)
        })
    }, [breeds])

    return(
        <section>
            <Link to="/" >Home </Link>

            <h1>Cat</h1>
            {/* <img alt="cat" src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" ></img> */}

            {breeds.map( item => <p>{item.name} {item.origin}</p>)}

        </section>
    )
}

export default CatList;
