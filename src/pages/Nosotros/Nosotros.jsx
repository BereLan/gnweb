import Header from "../../components/Header/Header";
import naser33 from "../../assets/images/naser_33.png";
import Footer from "../../components/Footer/Footer";

function Nosotros() {
	return (
		<>
			<Header />

			<div className="page-heading header-text">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>GRUPO NASER</h1>
							<span>CONTAMOS CON MÁS DE 33 AÑOS DE EXPERIENCIA</span>
						</div>
					</div>
				</div>
			</div>

			<div className="more-info about-info">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="more-info-content">
								<div className="row">
									<div className="col-md-6 align-self-center">
										<div className="right-content">
											<span>NACIONAL DE SERVICIOS FUNERARIOS A FUTURO</span>
											<h2>
												HISTORIA{" "}
												<em>
													<br />
													GRUPO NASER
												</em>
											</h2>
											<p>
												Sabemos que hablar de la muerte no es un tema fácil de
												tratar pero estamos para ayudarle en los momentos más
												difíciles de la vida. Desde nuestra fundación en 1989
												nos hemos comprometido a brindar un servicio de
												excelencia y calidad a nuestros clientes. <br />
												<br />
												Sabemos que hablar de la muerte no es un tema fácil de
												tratar.
											</p>
											<a href="" className="filled-button">
												CONOZCA MÁS
											</a>
										</div>
									</div>
									<div className="col-md-6">
										<div className="left-image">
											<img src={naser33} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="fun-facts">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="left-content">
								<span>Nuestros logros</span>
								<h2>
									Comprometidos con las <em>familias mexicanas</em>
								</h2>
								<p>
									En Grupo Naser estamos en constante crecimiento para ofrecer
									siempre el mejor servicio. <br />
									<br />
									Tenemos la satisfacción de En Grupo Naser estamos en constante
									crecimiento para ofrecer siempre el mejor servicio. En Grupo
									Naser estamos en constante crecimiento para ofrecer siempre el
									mejor servicio.
								</p>
								<a href="contacto.html" className="filled-button">
									CONTACTO
								</a>
							</div>
						</div>
						<div className="col-md-6 align-self-center">
							<div className="row">
								<div className="col-md-6">
									<div className="count-area-content">
										<div className="count-digit">120</div>
										<div className="count-title">Red Funeraria</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="count-area-content">
										<div className="count-digit">26789</div>
										<div className="count-title">Clientes satisfechos</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="count-area-content">
										<div className="count-digit">5</div>
										<div className="count-title">Funerarias y cementerios</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="count-area-content">
										<div className="count-digit">53</div>
										<div className="count-title">Proyectos realizados</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="testimonials">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-heading">
								<h2>
									Servicios Dignos <em>a precios justos</em>
								</h2>
								<span>Testimonio de nuestros clientes</span>
							</div>
						</div>
						<div className="col-md-12">
							<div className="owl-testimonials owl-carousel">
								<div className="testimonial-item">
									<div className="inner-content">
										<h4>Luz Espino</h4>
										<span>Naser Morelos</span>
										<p>
											"La asesoría fue adecuada, en esos momentos no sabemos que
											pasos se deben seguir, gracias por orientarme."
										</p>
									</div>
								</div>

								<div className="testimonial-item">
									<div className="inner-content">
										<h4>Laura Porras</h4>
										<span>Veracruz</span>
										<p>
											"Todo muy bien. En otro momento regresaremos para
											información de paquetería familiar.."
										</p>
									</div>
								</div>

								<div className="testimonial-item">
									<div className="inner-content">
										<h4>José Ramírez</h4>
										<span>Naser Oaxaca</span>
										<p>
											"La atención que nos dieron y la forma en que nos trataron
											todo el tiempo fue excelente."
										</p>
									</div>
								</div>

								<div className="testimonial-item">
									<div className="inner-content">
										<h4>Alejandro Galindo</h4>
										<span>Agencia Oaxaca</span>
										<p>
											"Me orientaron en los trámites que tenía que realizar y en
											la agencia estuvieron atentos a cualquier situación, todo
											salió muy bien."
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Nosotros;
