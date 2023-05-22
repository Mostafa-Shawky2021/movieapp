import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Details from "./pages/details/Details";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.scss";
import "swiper/swiper.min.css";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/:category/search/:keyword" element={<Category />} />
				<Route path="/:category/:id" element={<Details />} />
				<Route path="/:category" element={<Category />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
export default App;
