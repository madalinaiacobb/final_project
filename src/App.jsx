import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/*' element={<h1>NOT FOUND!</h1>} />
			</Routes>
			{/* FOOTER */}
		</div>
	);
}

export default App;
