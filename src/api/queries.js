import axios from "../lib/axiosConfig";

import { movieType, tvType, category } from "./tmdbApi";

export const fetchMovieList = async (type, params) => {
	const url = `/movie/${type}`;
	try {
		const res = await axios.get(url, params);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const fetchTvList = async (type, params) => {
	const url = `/tv/${type}`;
	try {
		const res = await axios.get(url, params);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const getVideos = async (category, id) => {
	const url = `/${category}/${id}/videos`;
	try {
		const res = await axios.get(url);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const search = async (category, params) => {
	console.log(category);
	const url = `/search/${category}`;
	try {
		const res = await axios.get(url, params);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const detail = async (category, id, params) => {
	const url = `/${category}/${id}`;
	try {
		const res = await axios.get(url, params);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const credits = async (category, id) => {
	const url = `/${category}/${id}/credits`;
	try {
		const res = await axios.get(url);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const similar = async (category, id) => {
	const url = `/${category}/${id}/similar`;
	try {
		const res = await axios.get(url);
		return res;
	} catch (err) {
		console.log(err);
	}
};
