import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Map from "../../components/Map/Map";

function Contacto() {
	return (
		<>
			<Header />
			<div className="page-heading header-text">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>Contacto</h1>
							<span>Comuníquese con nosotros</span>
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
								<i className="fa fa-phone"></i>
								<h4>Corporativo Grupo Naser</h4>
								<p>
									Comuníquese a nuestras líneas telefónicas para recibir la
									atención que necesita.
								</p>
								<a href="#">55 5688 7866</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-item">
								<i className="fa fa-envelope"></i>
								<h4>Correo Electrónico</h4>
								<p>
									Escríbanos y nos pondremos en contacto con usted a la brevedad
									posible.
								</p>
								<a href="#">info@naser.com.mx</a>
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-item">
								<i className="fa fa-map-marker"></i>
								<h4>Dirección</h4>
								<p>
									Av. División del Norte #2566
									<br />
									Col. San Diego Churubusco
									<br />
									C.P. 04120, Coyoacán, CDXM
								</p>
								<a href="#">Ver Mapa</a>
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
							</div>
						</div>
						<div className="col-md-12">
							<div className="contact-form">
								<form id="contact" action="" method="get">
									<div className="row">
										<div className="col-lg-4 col-md-12 col-sm-12">
											<fieldset>
												<input
													name="name"
													type="text"
													className="form-control"
													id="name"
													placeholder="Nombre"
													required=""
												/>
											</fieldset>
										</div>
										<div className="col-lg-4 col-md-12 col-sm-12">
											<fieldset>
												<input
													name="email"
													type="text"
													className="form-control"
													id="email"
													pattern="[^ @]*@[^ @]*"
													placeholder="Correo Electrónico"
													required=""
												/>
											</fieldset>
										</div>
										<div className="col-lg-4 col-md-12 col-sm-12">
											<fieldset>
												<input
													name="subject"
													type="text"
													className="form-control"
													id="subject"
													placeholder="Asunto"
													required=""
												/>
											</fieldset>
										</div>
										<div className="col-lg-12">
											<fieldset>
												<textarea
													name="message"
													rows="6"
													className="form-control"
													id="message"
													placeholder="Mensaje"
													required=""
												></textarea>
											</fieldset>
										</div>
										<div className="col-lg-12">
											<fieldset>
												<button
													type="submit"
													id="form-submit"
													className="filled-button"
												>
													Enviar Mensaje
												</button>
											</fieldset>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="map-container" id="map">
				<Map />
			</div>

			<div className="partners contact-partners">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="owl-partners owl-carousel">
								<div className="partner-item"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Contacto;
