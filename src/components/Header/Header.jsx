import naserLogo from "../../assets/images/logo_naser.png";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="">
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<NavLink to="/">
						<img src={naserLogo} alt="Grupo Naser" width="95px" />
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<NavLink className="nav-link" to="/">
									Inicio
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/nosotros">
									Nosotros
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/necesidad">
									Necesidad Inmediata
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/prevision">
									Previsión
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/servicios">
									Servicios
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/obituario">
									Obituario
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/contacto">
									Contacto
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
