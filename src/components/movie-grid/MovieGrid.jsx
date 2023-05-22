import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as tmdbApiUrl from "../../api/tmdbApi";
import * as tmpApiQuery from "../../api/queries";

import MovieCard from "../movie-card/MovieCard";
import Input from "../input/Input";
import { Col, Container, Row } from "react-bootstrap";

import "./_movie-grid.scss";
const MovieGrid = ({ category }) => {
	const [tvShows, setTvShows] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(1);
	const { keyword } = useParams();

	useEffect(() => {
		const params = {};

		(async () => {
			// if we not in searching case
			if (keyword === undefined) {
				if (category === tmdbApiUrl.category.MOVIE) {
					const res = await tmpApiQuery.fetchMovieList(tmdbApiUrl.movieType.UPCOMING, { params });
					setTvShows(res.data.results);
					setTotalPage(res.data.total_pages);
				} else {
					const res = await tmpApiQuery.fetchTvList(tmdbApiUrl.tvType.POPULAR, { params });
					setTvShows(res.data.results);
					setTotalPage(res.data.total_pages);
				}
			} else {
				params.query = keyword;
				const res = await tmpApiQuery.search(category, { params });
				console.log(res);
				setTvShows(res.data.results);
				setTotalPage(res.data.total_pages);
			}
		})();
	}, [category, keyword]);

	const handleLoadMore = async () => {
		if (keyword === undefined) {
			const params = {
				page: page + 1,
			};
			if (category === tmdbApiUrl.category.MOVIE) {
				const res = await tmpApiQuery.fetchMovieList(tmdbApiUrl.movieType.UPCOMING, { params });
				setTvShows([...tvShows, ...res.data.results]);
				setTotalPage(res.data.total_pages);
			} else {
				const res = await tmpApiQuery.fetchTvList(tmdbApiUrl.tvType.POPULAR, { params });
				setTvShows([...tvShows, ...res.data.results]);
				setTotalPage(res.data.total_pages);
			}
		} else {
			const params = {
				page: page + 1,
			};
			params.query = keyword;
			const res = await tmpApiQuery.serach(category, { params });
			setTvShows([...tvShows, ...res.data.results]);
			setTotalPage(res.data.total_pages);
		}
	};

	return (
		<div className="movie-grid">
			<div className="search-wrapper">
				<MovieSearch category={category} keyword={keyword} />
			</div>

			<Container fluid="xxl">
				{!!tvShows.length ? (
					<>
						<Row>
							{tvShows.map((show) => (
								<Col xs={6} sm={4} md={3} key={show.id}>
									<MovieCard category={category} item={show} />
								</Col>
							))}
						</Row>
						{page < totalPage && (
							<div className="load-more-btn d-flex justify-content-center">
								<button className="btn" onClick={handleLoadMore}>
									Load more
								</button>
							</div>
						)}
					</>
				) : (
					<p>sorry no result found</p>
				)}
			</Container>
		</div>
	);
};

const MovieSearch = ({ keyword, category }) => {
	const navigate = useNavigate();

	const [keywordSearch, setKeywordSearch] = useState(keyword ? keyword : "");

	const goToSearch = () => {
		if (keywordSearch.trim().length > 0) {
			navigate(`/${category}/search/${keywordSearch}`);
		} else {
			navigate(`/${category}`);
		}
	};

	useEffect(() => {
		const enterEvent = (e) => {
			e.preventDefault();
			if (e.keyCode === 13) {
				goToSearch();
			}
		};
		document.addEventListener("keyup", enterEvent);
		return () => {
			document.removeEventListener("keyup", enterEvent);
		};
	}, [keyword, goToSearch]);

	return (
		<div className="movie-search" style={{ width: "100%" }}>
			<Input style={{ padding: "7px 20px" }} type="text" placeholder="Enter keyword" value={keywordSearch} onChange={(e) => setKeywordSearch(e.target.value)} />
			<button class="search-btn" onClick={goToSearch}>
				Search
			</button>
		</div>
	);
};
export default MovieGrid;
