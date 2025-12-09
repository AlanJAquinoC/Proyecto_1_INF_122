import { Link } from "react-router-dom";
import './Est_1.css'

function Comida() {

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
                        <h1 className="display-4 titulo-seccion">🍽️ Comida Navideña 🎄</h1>
                        <p className="lead text-muted">Descubre los platillos tradicionales de la Navidad</p>
                    </div>
                <div class="row">
                    <div class="col-4">
                        <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                        <nav class="nav nav-pills flex-column">
                            <a class="nav-link" href="#item-1">Pavo</a>
                            <nav class="nav nav-pills flex-column">
                            </nav>
                            <a class="nav-link" href="#item-2">Paneton</a>
                            <a class="nav-link" href="#item-3">Ponche</a>
                            <nav class="nav nav-pills flex-column">
                            </nav>
                        </nav>
                        </nav>
                    </div>

                    <div class="col-8">
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                            <div className="card card-hover" id="item-1" style={{padding: "20px"}}>
                                <img className="imagen_comida" src="https://i0.wp.com/www.buenossaborespanama.com/wp-content/uploads/2024/12/christmas-turkey-traditional-festive-food-for-chr-2023-11-27-05-06-57-utc-scaled.jpg?fit=1200%2C800&ssl=1" alt="" />
                                <h4>Pavo</h4>
                            </div>
                            <div id="item-2">
                                <img className="imagen_comida" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXbwU0U8-7JukyXXpSWKYy2pv1qMstOfJWA&s" alt="" />
                                <h4>Paneton</h4>
                            </div>
                            <div id="item-3">
                                <img className="imagen_comida" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_vPPHot-pSrgxLDjoXqnWJ1KYK2ZiCod0A&s" alt="" />
                                <h4>Ponche </h4>
                            </div>
                        </div>
                    </div>
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
export default Comida;