import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand" href="#">Portafolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Portada</a>
                        <a className="nav-item nav-link" href="#">Presentación</a>
                        <a className="nav-item nav-link" href="#">Experiencia</a>
                        <a className="nav-item nav-link" href="#">Intereses</a>
                        <a className="nav-item nav-link" href="#">Proyectos</a>

                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
