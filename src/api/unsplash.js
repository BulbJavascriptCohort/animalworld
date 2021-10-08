// const endpoint = "https://api.unsplash.com/photos/"
const endPointBreed  = "https://api.thecatapi.com/v1/breeds"

// pending ====> fulfilled. rejected
function getCatBreeds(){
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
        return data;
    })

} 

export { getCatBreeds, addition }