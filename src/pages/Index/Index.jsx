import { Outlet } from "react-router-dom";

import Slider from "../../components/Slider/Slider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Index() {
	return (
		<>
			<Header />
			<Slider />
			<div class="request-form">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<h4>Nosotros nos comunicamos</h4>
							<span>Escríbanos un mensaje y lo contactaremos de inmediato</span>
						</div>
						<div class="col-md-4">
							<a href="contacto.html" class="border-button">
								Contacto
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="services">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="service-item">
								<div class="down-content">
									<img src="assets/images/icon_phone.png" alt="" />
									<h4>Asistencia inmediata</h4>
									<p>
										Si tiene una emergencia funeraria contáctenos para apoyarle.
									</p>
									<a href="tel" class="filled-button">
										LLAMAR
									</a>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="service-item">
								<div class="down-content">
									<img src="assets/images/icon_atention.png" alt="" />
									<h4>Necesidad inmediata</h4>
									<p>
										Conozca los beneficios que le ofrecemos para usted y su
										familia.
									</p>
									<a href="necesidad-inmediata.html" class="filled-button">
										SABER MÁS
									</a>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="service-item">
								<div class="down-content">
									<img src="assets/images/icon_group.png" alt="" />
									<h4>Planes de Previsión</h4>
									<p>Prevenir es un acto de responsabilidad y amor.</p>
									<br />
									<a href="prevision.html" class="filled-button">
										SABER MÁS
									</a>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="service-item">
								<div class="down-content">
									<img src="assets/images/icon_map.png" alt="" />
									<h4>Cobertura Nacional</h4>
									<p>Servicio en toda la República mexicana.</p>
									<a href="cobertura.html" class="filled-button">
										SABER MÁS
									</a>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="service-item">
								<div class="down-content">
									<img src="assets/images/icon_phone.png" alt="" />
									<h4>Asistencia Empresarial</h4>
									<p>Proteja a su fuerza laboral.</p>
									<a href="" class="filled-button">
										SABER MÁS
									</a>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="service-item">
								<div class="down-content">
									<img src="assets/images/icon_time.png" alt="" />
									<h4>Obituario</h4>
									<p>Honrando Memorias.</p>
									<a href="obituario.html" class="filled-button">
										SABER MÁS
									</a>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="service-item">
								<div class="down-content">
									<img src="assets/images/icon_map.png" alt="" />
									<h4>Apoyo Emocional</h4>
									<p>Apoyo en los momentos difíciles.</p>
									<a href="cobertura.html" class="filled-button">
										SABER MÁS
									</a>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="service-item">
								<div class="down-content">
									<img src="assets/images/icon_phone.png" alt="" />
									<h4>Contrato Digital</h4>
									<p>Solicite su contrato digital</p>
									<a href="" class="filled-button">
										SABER MÁS
									</a>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="service-item">
								<div class="down-content">
									<img src="assets/images/icon_services.png" alt="" />
									<h4>Servicios adicionales</h4>
									<p>Nuestros servicios.</p>
									<a href="servicios.html" class="filled-button">
										SABER MÁS
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="espacio"></div>

			<Footer />
		</>
	);
}

export default Index;
