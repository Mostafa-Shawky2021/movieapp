import React from "react";

import { Link } from "react-router-dom";

import * as tmdbApi from "../../api/tmdbApi";

import apiConfig from "../../api/apiConfig";

import "./_movie-card.scss";

const MovieCard = ({ item, category }) => {
	const link = `/${category}/${item.id}`;

	const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

	return (
		<Link to={link} className="card-wrapper">
			<div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
				<button className="btn-play">
					<i className="fa fa-play"></i>
				</button>
			</div>
			<h5 className="name">{item.title || item.name}</h5>
		</Link>
	);
};

export default MovieCard;
