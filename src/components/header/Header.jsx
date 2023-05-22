import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Container } from "react-bootstrap";

import Logo from "../../assets/tmovie.png";
import "./_header.scss";

const headerNav = [
	{
		display: "Home",
		path: "/",
	},
	{
		display: "Movies",
		path: "/movie",
	},
	{
		display: "Tv",
		path: "/tv",
	},
];
const Header = () => {
	const { pathname } = useLocation();
	const headerRef = useRef(null);

	const active = headerNav.findIndex((nav) => nav.path === pathname);

	useEffect(() => {
		const shrinkHeader = () => {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				headerRef.current.classList.add("shrink");
			} else {
				headerRef.current.classList.remove("shrink");
			}
		};
		window.addEventListener("scroll", shrinkHeader);
		return () => {
			window.removeEventListener("scroll", shrinkHeader);
		};
	}, []);

	return (
		<header ref={headerRef} className="header-wrapper">
			<Container className="d-flex align-items-center justify-content-center justify-content-sm-between">
				<div className="brand d-flex align-items-center gap-3">
					<img src={Logo} alt="" width="50" />
					<Link to="/" className="brand-name">
						tMovies
					</Link>
				</div>
				<ul className="list-unstyled d-flex gap-3 header-nav">
					{headerNav.map((nav, ind) => (
						<li key={ind} className={active === ind ? "active" : ""}>
							<Link to={nav.path}>{nav.display}</Link>
						</li>
					))}
				</ul>
			</Container>
		</header>
	);
};

export default Header;
