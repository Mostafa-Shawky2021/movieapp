import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import * as tmdApiQuery from "../../api/queries";
import * as tmdbApiUrl from "../../api/tmdbApi";

const VideoList = ({ id }) => {
	const { category } = useParams();

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await tmdApiQuery.getVideos(category, id);
			console.log(res);
			setVideos(res.data?.results?.slice(0, 5));
		})();
	}, [category, id]);
	return (
		<>
			{videos.map((video) => (
				<Video key={video.id} video={video} />
			))}
		</>
	);
};

const Video = ({ video }) => {
	return (
		<div className="video mt-4">
			<div className="video-title">
				<h2>{video.name}</h2>
			</div>
			<iframe src={`https://www.youtube.com/embed/${video.key}`} width="100%" height="500px" title="video" />
		</div>
	);
};
export default VideoList;
