import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index/Index";
import Nosotros from "./pages/Nosotros/Nosotros";
import Prevision from "./pages/Prevision/Prevision";
import NecesidadInmediata from "./pages/NecesidadInmediata/NecesidadInmediata";
import Contacto from "./pages/Contacto/Contacto";
import Obituario from "./pages/Obituario/Obituario";
import Servicios from "./pages/Servicios/Servicios";
import NotFound from "./pages/NotFound/NotFound";
import Localizacion from "./pages/Localizacion/Localizacion";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import { CitiesProvider } from "./contexts/CitiesContext";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<CitiesProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Index />}></Route>
					<Route path="nosotros" element={<Nosotros />}></Route>
					<Route path="necesidad" element={<NecesidadInmediata />}></Route>
					<Route path="prevision" element={<Prevision />}></Route>
					<Route path="contacto" element={<Contacto />}></Route>
					<Route path="obituario" element={<Obituario />}></Route>
					<Route path="servicios" element={<Servicios />}></Route>
					<Route path="localizacion" element={<Localizacion />}>
						<Route index element={<Navigate replace to="cities" />}></Route>
						<Route path="cities" element={<CityList></CityList>}></Route>
						<Route
							path="countries"
							element={<CountriesList></CountriesList>}
						></Route>
						<Route path="cities" element={<CityList></CityList>}></Route>
						<Route path="cities/:id" element={<City />}></Route>
						{/* <Route path="cities" element={<CityList></CityList>}></Route>
					<Route path="cities/:id" element={<City />}></Route>
					<Route
						path="countries"
						element={<CountriesList></CountriesList>}
					></Route>
					<Route path="form" element={<Form />}></Route> */}
					</Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</CitiesProvider>
	);
}

export default App;
