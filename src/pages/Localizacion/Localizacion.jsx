import Sidebar from "../../components/Sidebar/Sidebar";
import Map from "../../components/Map/Map";
import styles from "./Localizacion.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Localizacion() {
	return (
		<>
			<Header />
			<div className={styles.app}>
				<Sidebar />
				<Map></Map>
			</div>
			<Footer  />
		</>
	);
}

export default Localizacion;
