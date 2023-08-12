import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function NotFound() {
	return (
		<>
			<Header />
			<div className="page-heading header-text">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>Pagina no encontrada</h1>
							{/* <span>Más de 33 años de experiencia en el ramo funerario</span> */}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default NotFound;
