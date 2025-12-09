import { Link } from "react-router-dom";
import './Est_1.css'

function Historia() {

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

            {/* Título */}
            <div className="container my-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 titulo-seccion">📖 Historia de la Navidad 🎄</h1>
                    <p className="lead text-muted">Descubre el origen y evolución de la festividad más celebrada del mundo</p>
                </div>

                {/* Contenido Simple */}
                <div className="row">
                    <div className="col-12">
                        <div className="card card-hover mb-4">
                            <img src="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=500" className="card-img-top" alt="Origen de la Navidad" style={{height: '300px', objectFit: 'cover'}}/>
                            <div className="card-body">
                                <h2 className="card-title text-christmas">Origen de la Navidad</h2>
                                <p className="card-text" style={{textAlign: 'justify', lineHeight: '1.8'}}>La Navidad es una festividad cristiana que conmemora el nacimiento de Jesucristo el 25 de diciembre. Aunque la Biblia no especifica la fecha exacta de su nacimiento, la Iglesia Católica estableció esta fecha en el siglo IV.</p>
                            </div>
                        </div>

                        <div className="card card-hover mb-4">
                            <img src="https://media.istockphoto.com/id/623209324/es/foto/santa-claus-montado-en-trineo-con-caja-de-regalo.jpg?s=612x612&w=0&k=20&c=7woRBPQvYdVpnAi7cwxyV8fbRBuL15MUNRhARnB7vPA=" className="card-img-top" alt="Santa Claus" style={{height: '300px', objectFit: 'cover'}}/>
                            <div className="card-body">
                                <h2 className="card-title text-christmas">La Leyenda de Santa Claus</h2>
                                <p className="card-text" style={{textAlign: 'justify', lineHeight: '1.8'}}>San Nicolás de Bari fue un obispo del siglo IV conocido por su generosidad con los niños y los pobres. Su leyenda evolucionó a través de los siglos, especialmente en Holanda como 'Sinterklaas'.</p>
                            </div>
                        </div>

                        <div className="card card-hover mb-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XtJOAQ4zz1w1bOdiyf8gnW9LRxkJd5Ym4w&s" className="card-img-top" alt="Árbol de Navidad" style={{height: '300px', objectFit: 'cover'}}/>
                            <div className="card-body">
                                <h2 className="card-title text-christmas">El Árbol de Navidad</h2>
                                <p className="card-text" style={{textAlign: 'justify', lineHeight: '1.8'}}>La tradición del árbol de Navidad tiene raíces en culturas paganas germánicas que decoraban árboles de hoja perenne durante el solsticio de invierno, simbolizando vida eterna.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Información adicional */}
                <div className="alert alert-christmas text-center mt-5" role="alert">
                    <h4 className="alert-heading">✨ La Magia de la Tradición</h4>
                    <p>A través de los siglos, la Navidad ha evolucionado incorporando tradiciones de diferentes culturas, pero siempre manteniendo su esencia de amor, esperanza y unidad familiar.</p>
                </div>
            </div>

            {/* Footer */}
            <div className="footer mt-5">
                <p>© 2025 - ALAN JOSUE AQUINO CONDORI</p>
                <p>Todo los derechos reservados</p>
                <p>Contacto: <b>alanjoseaquinocondori@gmail.com</b></p>
            </div>
        </div>
    );
}
export default Historia;