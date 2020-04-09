import React from 'react'
import Typical from 'react-typical'


const Titulo = () => {

 
    return (
        <div className=" portada container d-flex justify-content-center">

        <Typical
        steps={['Ivan Henriquez...']}
        // loop={Infinity}
        wrapper="h1"
        />
    
        </div>
    )
}

export default Titulo
