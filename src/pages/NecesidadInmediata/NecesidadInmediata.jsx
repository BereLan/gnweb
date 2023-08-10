import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function NecesidadInmediata() {
	return (
		<>
			<Header />
			<div className="page-heading header-text">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>Necesidad Inmediata</h1>
							<span>Atentos a brindarle el mejor servicio</span>
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
								<img src="assets/images/ni_morelos.png" alt="" />
								<h4>
									Agencia Funeraria <br />
									Naser Aragón
								</h4>
								<p>
									Comuníquese a nuestras líneas telefónicas para recibir la
									atención que necesita.
								</p>
								<a href="#">55 5760 1317</a> <br />
								<a href="#">funerariaaragon@naser.com.mx</a> <br />
								<a href="#">Ver Mapa</a> <br />
							</div>
							<a href="aragon.html" className="filled-button">
								CONOZCA MÁS
							</a>
						</div>
						<div className="col-md-4">
							<div className="contact-item">
								<img src="assets/images/ni_morelos.png" alt="" />
								<h4>
									Agencia Funeraria <br />
									Naser Morelos
								</h4>
								<p>
									Escríbanos y nos pondremos en contacto con usted a la brevedad
									posible.
								</p>
								<a href="#">777 311 9223</a> <br />
								<a href="#">funerariamorelos@naser.com.mx</a>
								<br />
								<a href="#">Ver Mapa</a> <br />
							</div>
							<a href="morelos.html" className="filled-button">
								CONOZCA MÁS
							</a>
						</div>
						<div className="col-md-4">
							<div className="contact-item">
								<img src="assets/images/ni_morelos.png" alt="" />
								<h4>
									Agencia Funeraria <br />
									Naser Oaxaca
								</h4>
								<p>
									Av. División del Norte #2566
									<br />
									Col. San Diego Churubusco
									<br />
									C.P. 04120, Coyoacán, CDXM
								</p>
								<a href="#">951 518 7335</a>
								<br />
								<a href="#">funerariaoaxaca@naser.com.mx</a>
								<br />
								<a href="#">Ver Mapa</a>
								<br />
							</div>
							<a href="oaxaca.html" className="filled-button">
								CONOZCA MÁS
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="espacio"></div>
			<Footer />
		</>
	);
}

export default NecesidadInmediata;
