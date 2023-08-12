/* eslint-disable no-unused-vars */
import { useSearchParams, useNavigate } from "react-router-dom";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
	useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../../contexts/CitiesContext";
import { useGeolocation } from "../../hooks/useGeolocation";
import Button from "../Button";
import { useUrlPosition } from "../../hooks/useUrlPosition";

const flagemojiToPNG = (flag) => {
	var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
		.map((char) => String.fromCharCode(char - 127397).toLowerCase())
		.join("");
	return (
		<img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
	);
};

function Map() {
	const [searchParams] = useSearchParams();

	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	const navigate = useNavigate();

	const [mapPosition, setMapPosition] = useState([19.3555127, -99.1522524]);
	const { cities } = useCities();
	const {
		isLoading: isLoadingPosition,
		position: geolocationPosition,
		getPosition,
	} = useGeolocation();

	// const mapLat = searchParams.get("lat");
	// const mapLng = searchParams.get("lng");

	const [mapLat, mapLng] = useUrlPosition();

	useEffect(() => {
		if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
	}, [mapLat, mapLng]);

	useEffect(() => {
		if (geolocationPosition)
			setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
	}, [geolocationPosition]);

	return (
		<section className={styles.mapContainer}>
			{!geolocationPosition && (
				<Button type="position" onClick={getPosition}>
					{isLoadingPosition ? "Cargando..." : "Usa tu ubicación..."}
				</Button>
			)}

			<MapContainer
				center={mapPosition}
				zoom={12}
				scrollWheelZoom={true}
				className={styles.map}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>

				{cities.map((city) => (
					// <Marker
					// 	position={[city.position.lat, city.position.lng]}
					// 	key={city.id}
					// >
					// 	<Popup>
					// 		<span>{flagemojiToPNG(city.emoji)}</span>
					// 		<span>{city.cityName}</span>
					// 	</Popup>
					// </Marker>
					<Marker
						position={[city.position.lat, city.position.lng]}
						key={city.id}
					>
						<Popup>
							<p>
								<strong>Grupo Naser Corporativo</strong>
							</p>
							<p>
								Av. División del Nte. 2566, San Diego Churubusco, Coyoacán,
								04120 Ciudad de México, CDMX
							</p>
						</Popup>
					</Marker>
				))}
				<ChangeCenter position={mapPosition} />
				<DetectClick />
			</MapContainer>
		</section>
	);
}

function ChangeCenter({ position }) {
	const map = useMap();
	map.setView(position);
	return null;
}

function DetectClick() {
	const navigate = useNavigate();

	useMapEvents({
		click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
	});
}

export default Map;
