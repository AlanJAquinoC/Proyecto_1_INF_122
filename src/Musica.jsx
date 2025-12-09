import { Link } from "react-router-dom";
import './Est_1.css'

function Musica() {
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

            <div class="row row-cols-1 row-cols-md-2 g-4  mt-5">
                <div class="col ">
                    <div class="card card-hover">
                        <img src="https://i.ytimg.com/vi/E8gmARGvPlI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB_IKDbvviregN8h3oaDdxI5OoyVA" class="card-img-top " alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Last Christmas</h5>
                        </div>
                        <div className="card-footer bg-transparent">
                            <a href="https://youtu.be/E8gmARGvPlI?si=GxrXLnU5k3p8obiE" target="_blank" rel="noopener noreferrer" className="btn btn-christmas w-100">
                                ▶️ Ver en YouTube
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-hover">
                        <img src="https://i.ytimg.com/vi/0UVUW11FENs/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgUShCMA8=&rs=AOn4CLB-KIlPfj4HUn1LOo8GjfubjgRi-g" class="card-img-top " alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Feliz navidad</h5>
                        </div>
                        <div className="card-footer bg-transparent">
                            <a href="https://youtu.be/0UVUW11FENs?si=XU14v8YdXECc0WHy" target="_blank" rel="noopener noreferrer" className="btn btn-christmas w-100">
                                ▶️ Ver en YouTube
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-hover">
                        <img src="https://i.ytimg.com/vi/aAkMkVFwAoo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCsgeLHb89vB9lts4m3DlA02IJ2zA" class="card-img-top " alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">All I Want for Christmas Is You</h5>
                        </div>
                        <div className="card-footer bg-transparent">
                            <a href="https://youtu.be/aAkMkVFwAoo?si=4-41cSUG_6G6gNuj" target="_blank" rel="noopener noreferrer" className="btn btn-christmas w-100">
                                ▶️ Ver en YouTube
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-hover">
                        <img src="https://i.ytimg.com/vi/SF47MzYs_l4/hqdefault.jpg?sqp=-oaymwFBCOADEI4CSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-BIAC4AOKAgwIABABGBMgNyh_MA8=&rs=AOn4CLCQVmMTFRfbL_JwwXQk8VWrI8vH0w" class="card-img-top " alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Noche de Paz</h5>
                        </div>
                        <div className="card-footer bg-transparent">
                            <a href="https://youtu.be/SF47MzYs_l4?si=-3_4uxqpw7fC9W3D" target="_blank" rel="noopener noreferrer" className="btn btn-christmas w-100">
                                ▶️ Ver en YouTube
                            </a>
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
export default Musica;