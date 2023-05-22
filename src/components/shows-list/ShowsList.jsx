import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as tmdbApiUrl from "../../api/tmdbApi";
import * as tmpApiQuery from "../../api/queries";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MovieCard from "../movie-card/MovieCard";

import "./_shows-list.scss";

const ShowsList = ({ category, type, link, title, id = null }) => {
	const [tvShows, setTvShows] = useState([]);

	useEffect(() => {
		(async () => {
			const params = {};
			if (type != "similar") {
				// in case the category is movie
				if (category === tmdbApiUrl.category.MOVIE) {
					const res = await tmpApiQuery.fetchMovieList(type, { params });
					setTvShows(res.data.results);
				} else {
					const res = await tmpApiQuery.fetchTvList(type, { params });
					setTvShows(res.data.results);
				}
			} else {
				const res = await tmpApiQuery.similar(category, id);
				setTvShows(res.data.results);
			}
		})();
	}, []);

	return (
		<div className="tv-list">
			{!!tvShows.length && (
				<>
					<header className="list-header d-flex align-items-center justify-content-between">
						<h2 className="title">{title}</h2>
						<Link to={link} className="view-more">
							View more
						</Link>
					</header>
					<Swiper className="mt-4" modules={[Autoplay]} slidesPerView={"auto"} grabCursor={true} spaceBetween={10}>
						{tvShows.map((show) => (
							<SwiperSlide className="swiper-slide" key={show.id}>
								<MovieCard item={show} category={category} key={show.id} />
							</SwiperSlide>
						))}
					</Swiper>
				</>
			)}
		</div>
	);
};

export default ShowsList;
