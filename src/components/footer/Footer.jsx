import React from "react";

import { Link } from "react-router-dom";

import "./_footer.scss";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<div className="footer" style={{ backgroundImage: `url(${bg})` }}>
			<Container>
				<div className="logo d-flex justify-content-center align-items-center gap-2">
					<img src={logo} alt="logo" className="img-fluid" />
					<Link to="/">tMovies</Link>
				</div>
				<Row>
					<Col xs={6} md={4}>
						<ul class="list-unstyled">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>Contact us</li>
							<li>Terms of services</li>
							<li>About us</li>
						</ul>
					</Col>
					<Col xs={6} md={4}>
						<ul class="list-unstyled">
							<li>Live</li>
							<li>FAQ</li>
							<li>Premium</li>
							<li>Privacy policy</li>
						</ul>
					</Col>
					<Col xs={6} md={4}>
						<ul class="list-unstyled">
							<li>You must watch</li>
							<li>Recent Release</li>
							<li>Top TMDB</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
