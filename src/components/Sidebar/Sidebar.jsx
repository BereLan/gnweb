import { Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";
import LocalizacionNav from "../LocalizacionNav/LocalizacionNav";

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<LocalizacionNav />

			<Outlet />
			<footer className={styles.footer}>
				<p className={styles.copyright}>
					&copy; Copyright Grupo Naser Corporativ {new Date().getFullYear()}
				</p>
			</footer>
		</div>
	);
}

export default Sidebar;
