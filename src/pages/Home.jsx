import React from "react";
import HeroSlide from "../components/hero-slide/HeroSlide";
import ShowsList from "../components/shows-list/ShowsList";
import { Container } from "react-bootstrap";

import * as tmdbApiUrl from "../api/tmdbApi";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<>
			<HeroSlide />
			<Container fluid="xxl">
				<ShowsList title="Trending Movies" link="/movie" type={tmdbApiUrl.movieType.POPULAR} category={tmdbApiUrl.category.MOVIE} />
				<ShowsList title="Top Rated Movies" link="/movie" type={tmdbApiUrl.movieType.TOP_RATED} category={tmdbApiUrl.category.MOVIE} />
				<ShowsList title="Trending Tv" link="/tv" type={tmdbApiUrl.tvType.POPULAR} category={tmdbApiUrl.category.TV} />
				<ShowsList title="Top Rated	Tv" link="/tv" type={tmdbApiUrl.tvType.TOP_RATED} category={tmdbApiUrl.category.TV} />
			</Container>
		</>
	);
};

export default Home;
