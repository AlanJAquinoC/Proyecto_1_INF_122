import {Link } from "react-router-dom";
import "./Est_1.css"

function Principal(props) {
    return (
        <div className="padre">
            <div className="encabezado">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0kuR-FSxHw1JdMC_kkeQlxrXWMdpxYZDsQ&s" alt="Logo" width="110" height="90" className="d-inline-block align-text-top"/>
                        </a>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            <Link className="nav-link active" to="/decoracion">Decoracion</Link>
                            <Link className="nav-link active" to="/musica">Musica</Link>
                            <Link className="nav-link active" to="/comida">Comida</Link>
                            <Link className="nav-link active" to="/historia">Historia</Link>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
            
            {/* Carrusel de imagenes */}
            <div className="carusel">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="/fondo_navi_1.jpg" className="d-block w-100" alt="Navidad 1" />
                    </div>
                    <div className="carousel-item">
                    <img src="/fondo_navi_2.jpg" className="d-block w-100" alt="Navidad 2" />
                    </div>
                    <div className="carousel-item">
                    <img src="/fondo_navi_3.jpg" className="d-block w-100" alt="Navidad 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            
            {/* Feliz navidad */}
            <div className="titulo_feliz_navi">
                <h1><span className="badge">FELIZ NAVIDAD !!!</span></h1>
            </div>

            {/* Contenido adicional */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12 text-center mb-4">
                        <h2 className="titulo-seccion">Bienvenidos a la Magia de la Navidad</h2>
                        <p>Descubre todo sobre esta época mágica del año</p>
                    </div>
                </div>

                <div className="row mt-1">
                    <div className="col-md-12">
                        <div className="alert alert-christmas text-center">
                            <h4 className="alert-heading">🎅 ¿Sabías que...?</h4>
                            <p>La Navidad es una de las festividades más celebradas en todo el mundo, uniendo a familias y amigos en un espíritu de amor y generosidad.</p>
                            <hr></hr>
                            <p className="mb-0">
                                <Link to="/historia" className="alert-link">Conoce más sobre la historia de la Navidad →</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>© 2025 - ALAN JOSUE AQUINO CONDORI</p>
                <p>Todo los derechos reservados</p>
                <p>Contacto: <b>alanjoseaquinocondori@gmail.com</b></p>
            </div>
        </div>
    );
}
export default Principal;