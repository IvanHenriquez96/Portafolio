import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const RedesSociales = () => {
    return (
        <div className="container subTitulo d-flex justify-content-center">
            <FontAwesomeIcon className="icono" icon={faLinkedinIn} size="2x" />
            <FontAwesomeIcon className="icono" icon={faGithub} size="2x" />
            <FontAwesomeIcon className="icono" icon={faWhatsapp} size="2x" />
            
        </div>
    )
}

export default RedesSociales
