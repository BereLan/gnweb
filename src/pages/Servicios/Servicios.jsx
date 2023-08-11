import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Servicios() {
	return (
		<>
			<Header />
			<div className="page-heading header-text">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>Servicios</h1>
							<span>Más de 33 años de experiencia en el ramo funerario</span>
						</div>
					</div>
				</div>
			</div>
			<div className="single-services">
				<div className="container">
					<Tab.Container defaultActiveKey="#link1">
						<Row id="tabs">
							<Col sm={4}>
								<ListGroup>
									<ListGroup.Item action href="#link1">
										Traslados <i className="fa fa-angle-right"></i>
									</ListGroup.Item>
									<ListGroup.Item action href="#link2">
										Capilla a domicilio <i className="fa fa-angle-right"></i>
									</ListGroup.Item>
									<ListGroup.Item action href="#link3">
										Ceremonioa religiosa <i className="fa fa-angle-right"></i>
									</ListGroup.Item>
									<ListGroup.Item action href="#link4">
										Homenaje en video <i className="fa fa-angle-right"></i>
									</ListGroup.Item>
									<ListGroup.Item action href="#link5">
										Condolencia digital*
										<i className="fa fa-angle-right"></i>
									</ListGroup.Item>
									<ListGroup.Item action href="#link6">
										Funerales virtuales <i className="fa fa-angle-right"></i>
									</ListGroup.Item>
									<ListGroup.Item action href="#link7">
										Autobus de acompañamiento**
										<i className="fa fa-angle-right"></i>
									</ListGroup.Item>
									<ListGroup.Item action href="#link8">
										Embalsamamiento
										<i className="fa fa-angle-right"></i>
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={8}>
								<Tab.Content>
									<Tab.Pane eventKey="#link1">
										<img src="assets/images/servicio_01.png" alt="" />
										<h4>Traslados</h4>
										<p>
											Vivamus sed feugiat elit. Pellentesque pretium, massa at
											placerat vehicula, neque turpis pulvinar tortor, eget
											convallis lorem odio non tortor. Donec massa est,
											fermentum sit amet felis ac, maximus luctus elit. Vivamus
											aliquet, dolor id imperdiet imperdiet, dui diam aliquet
											dui, a euismod metus enim ac velit. Vivamus eu tristique
											odio, vel tristique quam.
											<br />
											<br />
											Proin eu molestie risus. Etiam suscipit pretium odio, at
											consectetur nisi. Sed ut dolor in augue cursus ultrices.
											Vivamus mauris turpis, auctor vel facilisis in, tincidunt
											vel diam. Sed vitae scelerisque orci. Nunc non magna orci.
											Aliquam commodo mauris ante.
										</p>
									</Tab.Pane>
									<Tab.Pane eventKey="#link2">
										<img src="assets/images/servicio_01.png" alt="" />
										<h4>Capilla a domicilio</h4>
										<p>
											Vivamus sed feugiat elit. Pellentesque pretium, massa at
											placerat vehicula, neque turpis pulvinar tortor, eget
											convallis lorem odio non tortor. Donec massa est,
											fermentum sit amet felis ac, maximus luctus elit. Vivamus
											aliquet, dolor id imperdiet imperdiet, dui diam aliquet
											dui, a euismod metus enim ac velit. Vivamus eu tristique
											odio, vel tristique quam.
											<br />
											<br />
											Proin eu molestie risus. Etiam suscipit pretium odio, at
											consectetur nisi. Sed ut dolor in augue cursus ultrices.
											Vivamus mauris turpis, auctor vel facilisis in, tincidunt
											vel diam. Sed vitae scelerisque orci. Nunc non magna orci.
											Aliquam commodo mauris ante.
										</p>
									</Tab.Pane>
									<Tab.Pane eventKey="#link3">
										<img src="assets/images/servicio_01.png" alt="" />
										<h4>Ceremonia religiosa</h4>
										<p>
											Vivamus sed feugiat elit. Pellentesque pretium, massa at
											placerat vehicula, neque turpis pulvinar tortor, eget
											convallis lorem odio non tortor. Donec massa est,
											fermentum sit amet felis ac, maximus luctus elit. Vivamus
											aliquet, dolor id imperdiet imperdiet, dui diam aliquet
											dui, a euismod metus enim ac velit. Vivamus eu tristique
											odio, vel tristique quam.
											<br />
											<br />
											Proin eu molestie risus. Etiam suscipit pretium odio, at
											consectetur nisi. Sed ut dolor in augue cursus ultrices.
											Vivamus mauris turpis, auctor vel facilisis in, tincidunt
											vel diam. Sed vitae scelerisque orci. Nunc non magna orci.
											Aliquam commodo mauris ante.
										</p>
									</Tab.Pane>
									<Tab.Pane eventKey="#link4">
										<img src="assets/images/servicio_01.png" alt="" />
										<h4>Homenaje en video</h4>
										<p>
											Vivamus sed feugiat elit. Pellentesque pretium, massa at
											placerat vehicula, neque turpis pulvinar tortor, eget
											convallis lorem odio non tortor. Donec massa est,
											fermentum sit amet felis ac, maximus luctus elit. Vivamus
											aliquet, dolor id imperdiet imperdiet, dui diam aliquet
											dui, a euismod metus enim ac velit. Vivamus eu tristique
											odio, vel tristique quam.
											<br />
											<br />
											Proin eu molestie risus. Etiam suscipit pretium odio, at
											consectetur nisi. Sed ut dolor in augue cursus ultrices.
											Vivamus mauris turpis, auctor vel facilisis in, tincidunt
											vel diam. Sed vitae scelerisque orci. Nunc non magna orci.
											Aliquam commodo mauris ante.
										</p>
									</Tab.Pane>
									<Tab.Pane eventKey="#link5">
										<img src="assets/images/servicio_01.png" alt="" />
										<h4>Condolencia digital*</h4>
										<p>
											Vivamus sed feugiat elit. Pellentesque pretium, massa at
											placerat vehicula, neque turpis pulvinar tortor, eget
											convallis lorem odio non tortor. Donec massa est,
											fermentum sit amet felis ac, maximus luctus elit. Vivamus
											aliquet, dolor id imperdiet imperdiet, dui diam aliquet
											dui, a euismod metus enim ac velit. Vivamus eu tristique
											odio, vel tristique quam.
											<br />
											<br />
											Proin eu molestie risus. Etiam suscipit pretium odio, at
											consectetur nisi. Sed ut dolor in augue cursus ultrices.
											Vivamus mauris turpis, auctor vel facilisis in, tincidunt
											vel diam. Sed vitae scelerisque orci. Nunc non magna orci.
											Aliquam commodo mauris ante.
										</p>
									</Tab.Pane>
									<Tab.Pane eventKey="#link6">
										<img src="assets/images/servicio_01.png" alt="" />
										<h4>Funerales virtuales</h4>
										<p>
											Vivamus sed feugiat elit. Pellentesque pretium, massa at
											placerat vehicula, neque turpis pulvinar tortor, eget
											convallis lorem odio non tortor. Donec massa est,
											fermentum sit amet felis ac, maximus luctus elit. Vivamus
											aliquet, dolor id imperdiet imperdiet, dui diam aliquet
											dui, a euismod metus enim ac velit. Vivamus eu tristique
											odio, vel tristique quam.
											<br />
											<br />
											Proin eu molestie risus. Etiam suscipit pretium odio, at
											consectetur nisi. Sed ut dolor in augue cursus ultrices.
											Vivamus mauris turpis, auctor vel facilisis in, tincidunt
											vel diam. Sed vitae scelerisque orci. Nunc non magna orci.
											Aliquam commodo mauris ante.
										</p>
									</Tab.Pane>
									<Tab.Pane eventKey="#link7">
										<img src="assets/images/servicio_01.png" alt="" />
										<h4>Autobús de acompañamiento</h4>
										<p>
											Vivamus sed feugiat elit. Pellentesque pretium, massa at
											placerat vehicula, neque turpis pulvinar tortor, eget
											convallis lorem odio non tortor. Donec massa est,
											fermentum sit amet felis ac, maximus luctus elit. Vivamus
											aliquet, dolor id imperdiet imperdiet, dui diam aliquet
											dui, a euismod metus enim ac velit. Vivamus eu tristique
											odio, vel tristique quam.
											<br />
											<br />
											Proin eu molestie risus. Etiam suscipit pretium odio, at
											consectetur nisi. Sed ut dolor in augue cursus ultrices.
											Vivamus mauris turpis, auctor vel facilisis in, tincidunt
											vel diam. Sed vitae scelerisque orci. Nunc non magna orci.
											Aliquam commodo mauris ante.
										</p>
									</Tab.Pane>
									<Tab.Pane eventKey="#link8">
										<img src="assets/images/servicio_01.png" alt="" />
										<h4>Embalsamamiento</h4>
										<p>
											Vivamus sed feugiat elit. Pellentesque pretium, massa at
											placerat vehicula, neque turpis pulvinar tortor, eget
											convallis lorem odio non tortor. Donec massa est,
											fermentum sit amet felis ac, maximus luctus elit. Vivamus
											aliquet, dolor id imperdiet imperdiet, dui diam aliquet
											dui, a euismod metus enim ac velit. Vivamus eu tristique
											odio, vel tristique quam.
											<br />
											<br />
											Proin eu molestie risus. Etiam suscipit pretium odio, at
											consectetur nisi. Sed ut dolor in augue cursus ultrices.
											Vivamus mauris turpis, auctor vel facilisis in, tincidunt
											vel diam. Sed vitae scelerisque orci. Nunc non magna orci.
											Aliquam commodo mauris ante.
										</p>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</div>
			</div>
			<div className="espacio"></div>
			<Footer />
		</>
	);
}

export default Servicios;
