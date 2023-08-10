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

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Index />}></Route>
				<Route path="nosotros" element={<Nosotros />}></Route>
				<Route path="necesidad" element={<NecesidadInmediata />}></Route>
				<Route path="prevision" element={<Prevision />}></Route>
				<Route path="contacto" element={<Contacto />}></Route>
				<Route path="obituario" element={<Obituario />}></Route>
				<Route path="servicios" element={<Servicios />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
