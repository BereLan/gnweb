import whatsappLogo from "../../assets/images/whatsapp.png";

function Footer() {
	return (
		<>
			<footer>
				<a
					className="appWhatsApp"
					target="_blank"
					href="https://api.whatsapp.com/send?phone=525517919823&text=Hola,%20necesito%20información"
				>
					<img src={whatsappLogo} alt="Whatsapp" />
				</a>
				<div className="container">
					<div className="row">
						<div className="col-md-3 footer-item">
							<h4>UBICACIÓN</h4>
							<p>
								Av. División del Norte #2566, Col. San Diego Churubusco C.P.
								04120, Coyoacán, CDMX.
							</p>
						</div>
						<div className="col-md-3 footer-item">
							<h4>GRUPO NASER</h4>
							<ul className="menu-list">
								<li>
									<a href="#">Inicio</a>
								</li>
								<li>
									<a href="#">Necesidad Inmediata</a>
								</li>
								<li>
									<a href="#">Planes de Previsión</a>
								</li>
								<li>
									<a href="#">Red Funeraria</a>
								</li>
								<li>
									<a href="#">Obituario</a>
								</li>
								<li>
									<a href="#">Apoyo emocional</a>
								</li>
								<li>
									<a href="#">Contacto</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 footer-item">
							<h4>CONTACTO</h4>
							<ul className="menu-list">
								<li>
									<a href="mailto:atencionaclientes@naser.com">
										<i className="fa fa-envelope"></i> info@naser.com.mx
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-phone"></i> 55 5688 7866
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-whatsapp"></i> 55 5688 7866
									</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 footer-item">
							<h4>CONOZCANOS</h4>
							<p>
								Comuníquese con nosotros para conocer mayor información de
								nuestros servicios.
							</p>
							<ul className="social-icons">
								<li>
									<a
										rel="nofollow"
										href="https://fb.com/templatemo"
										target="_blank"
									>
										<i className="fa fa-facebook"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-linkedin"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

			<div className="sub-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<p>Copyright &copy; Grupo Naser Corporativo - 2023</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
