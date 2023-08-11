import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
import { useState } from "react";

function Map() {
	const [searchParams] = useSearchParams();
	const [mapPosition, setMapPosition] = useState([19.3555127, -99.1522524]);

	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	const navigate = useNavigate();

	return (
		<section className={styles.mapContainer}>
			<MapContainer
				center={mapPosition}
				zoom={13}
				scrollWheelZoom={true}
				className={styles.map}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>
				<Marker position={mapPosition}>
					<Popup>
						Grupo Naser Corporativo Av. División del Nte. 2566, San Diego
						Churubusco, Coyoacán, 04120 Ciudad de México, CDMX
					</Popup>
				</Marker>
			</MapContainer>
		</section>
	);
}

export default Map;
