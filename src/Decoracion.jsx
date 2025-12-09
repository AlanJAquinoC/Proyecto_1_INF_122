import { Link } from "react-router-dom";
import './Est_1.css'

function Decoracion() {
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
            {/* Decoraciones */}
            <div class="row row-cols-1 row-cols-md-2 g-4  mt-5">
                <div class="col ">
                    <div class="card card-hover">
                    <img src="https://m.media-amazon.com/images/I/71xlXHjXiZL.jpg" class="card-img-top " alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Muñeco de nieve</h5>
                        <p class="card-text">$12.00</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-hover">
                    <img src="https://moveis.com.mx/cdn/shop/articles/decoraciones-navidenas-elegantesPOR-min.jpg?v=1703695224" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Bolas de nieve</h5>
                        <p class="card-text">$20.00</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-hover">
                    <img src="https://inspirame.corona.co/wp-content/uploads/2024/11/estilo-industrial.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Arbol</h5>
                        <p class="card-text">$100.00</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-hover">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85ndeYX9dgx5FAYdX0Y-sDciBuNjo-kv7mQ&s" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">1M Luces</h5>
                        <p class="card-text">$80.00</p>
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
export default Decoracion;