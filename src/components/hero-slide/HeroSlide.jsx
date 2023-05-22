import React, { useEffect, useState } from "react";

import * as tmdbApiUrl from "../../api/tmdbApi";
import * as tmpApiQuery from "../../api/queries";

import apiConfig from "../../api/apiConfig";
import { useNavigate } from "react-router-dom";
import { Button, Container, Modal } from "react-bootstrap";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./_hero-slide.scss";

const HeroSlide = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const params = {
			language: "en-US",
			page: 1,
		};

		(async () => {
			const res = await tmpApiQuery.fetchMovieList(tmdbApiUrl.movieType.POPULAR, { params });
			const moviesData = res.data.results.slice(0, 4);
			setMovies(moviesData);
		})();
	}, []);

	return (
		<div className="hero-slide">
			<Swiper slidesPerView={1} modules={[Autoplay]}>
				{movies.map((movie) => (
					<SwiperSlide key={movie.id}>{({ isActive }) => <HeroSlideItem item={movie} isActive={isActive} />}</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

const HeroSlideItem = ({ item, isActive }) => {
	const navigate = useNavigate();
	const activeClass = isActive ? "active" : "";
	const backgroundImage = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

	return (
		<div className={`hero-slide-item ${activeClass}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
			<Container className="hero-slide-content d-flex align-items-center gap-4">
				<div className="hero-slide-info">
					<h2 className="title">{item.title}</h2>
					<div className="overview">{item.overview}</div>
					<div className="buttons d-flex gap-4 mt-4">
						<button className="btn btn-watch" onClick={() => navigate(`/movie/${item.id}`)}>
							Watch now
						</button>
						<button className="btn btn-trailer" onClick={() => navigate(`/movie/${item.id}`)}>
							Watch Trailer
						</button>
					</div>
				</div>
				<div className="poster-image">
					<img className="img-fluid" src={apiConfig.w500Image(item.poster_path)} alt={item.title} />
				</div>
			</Container>
		</div>
	);
};

const TrialModal = ({ item }) => {
	return <></>;
};
export default HeroSlide;
