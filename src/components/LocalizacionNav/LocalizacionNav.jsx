import { NavLink } from "react-router-dom";
import styles from "./LocalizacionNav.module.css";

function LocalizacionNav() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<NavLink to="cities"> Agencias propias</NavLink>
				</li>
				<li>
					<NavLink to="countries"> Oficinas regionales</NavLink>
				</li>
				{/* <li>
					<NavLink to="form"> Form</NavLink>
				</li> */}
			</ul>
		</nav>
	);
}

export default LocalizacionNav;
