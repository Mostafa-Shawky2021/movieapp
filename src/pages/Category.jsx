import React from "react";
import { useParams } from "react-router-dom";

import PageHeader from "../components/page-header/PageHeader";
import * as tmdbApi from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";

const Category = () => {
	const { category } = useParams();

	return (
		<>
			<PageHeader>{category === tmdbApi.category.MOVIE ? "Movies" : "TV Series"}</PageHeader>
			<MovieGrid category={category} />
		</>
	);
};

export default Category;
