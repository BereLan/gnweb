import Header from "../../components/Header/Header";

function Prevision() {
	return (
		<>
			<Header />

			<div className="page-heading header-text">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>Servicios de Previsión funeraria</h1>
							<span>Prevenir es un acto de responsabilidad y amor</span>
						</div>
					</div>
				</div>
			</div>

			<div className="espacio"></div>
			<div className="contact-information">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="contact-item">
								<h4>
									TRABAJADORES <br />
									ACTIVOS DEL ISSSTE
								</h4>
								<p>Previsión a nivel Nacional.</p>
								<a href="#">Más información</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-item">
								<h4>
									JUBILADOS DEL <br />
									GOBIERNO FEDERAL
								</h4>
								<p>Previsión a nivel Nacional.</p>
								<a href="#">Más información</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-item">
								<h4>
									ASISTENCIA <br /> EMPRESARIAL
								</h4>
								<p>Previsión a nivel Nacional</p>
								<a href="#">Más información</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="espacio"></div>

			<div className="contact-information">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="contact-item">
								<h4>
									HOSPITAL DEL <br />
									NIÑO MORELENSE
								</h4>
								<p>Previsión en el estado de Morelos.</p>
								<a href="#">Más información</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-item">
								<h4>ISEA</h4>
								<p>Previsión en el estado de Aguascalientes</p>
								<a href="#">Más información</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-item">
								<h4>INEPJA</h4>
								<p>Previsión en el estado de Aguascalientes</p>
								<a href="#">Más información</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="espacio"></div>

			<div className="team">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-heading">
								<h2>
									Por qué elegir <em>Grupo Naser</em>
								</h2>
								<span>
									Beneficios al contratar nuestros Servicios de Previsión
								</span>
							</div>
						</div>
						<div className="col-md-4">
							<div className="team-item">
								<img src="assets/images/beneficio_1.png" alt="" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="team-item">
								<img src="assets/images/beneficio_2.png" alt="" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="team-item">
								<img src="assets/images/beneficio_3.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="team">
				<div className="container">
					<div className="row">
						<div className="col-md-12"></div>
						<div className="col-md-4">
							<div className="team-item">
								<img src="assets/images/beneficio_4.png" alt="" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="team-item">
								<img src="assets/images/beneficio_5.png" alt="" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="team-item">
								<img src="assets/images/beneficio_6.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="callback-form contact-us">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-heading">
								<h2>
									Envíenos un <em>mensaje</em>
								</h2>
								<span>Atenderemos su solicitud a la brevedad posible</span>
								<br />
								<a href="contacto.html" className="filled-button">
									CONTACTO
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Prevision;
