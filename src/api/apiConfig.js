const apiConfig = {
	BASE_URL: "https://api.themoviedb.org/3",
	apiKey: "a67ba01d7f95615c29fa0e5b94a70989",
	originalImage: (imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
	w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
};

export default apiConfig;
