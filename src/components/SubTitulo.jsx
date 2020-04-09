import React from 'react'
import Typical from 'react-typical'


const SubTitulo = () => {
    return (
        <div className="container d-flex justify-content-center">
            <Typical
                steps={['Hello World!', 1000, 'Web Developer!', 500, 'Web Developer - Laravel!', 500, 'Web Developer - React JS!', 500]}
                wrapper="h4"
            />
        </div>
    )
}

export default SubTitulo
