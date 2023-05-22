import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiConfig from "../../api/apiConfig";
import * as tmdbApiUrl from "../../api/tmdbApi";
import * as tmpApiQuery from "../../api/queries";

import "./_details.scss";
import { Col, Container, Row } from "react-bootstrap";
import CastList from "./CastList";
import VideoList from "./VideoList";
import ShowsList from "../../components/shows-list/ShowsList";
const Details = () => {
	const { category, id } = useParams();

	const [show, setShow] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await tmpApiQuery.detail(category, id, { params: {} });
			setShow(res.data);
			window.scrollTo(0, 0);
		})();
	}, [category, id]);

	return (
		<>
			{show && (
				<div className="details-wrapper">
					<div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(show.backdrop_path || show.poster_path)})` }}></div>
					<Container className="mb-3 content-container">
						<Row>
							<Col xs={12} lg={5}>
								<div className="movie-poster">
									<div className="poster" style={{ backgroundImage: `url(${apiConfig.originalImage(show.poster_path || show.backdrop_path)})` }}></div>
								</div>
							</Col>
							<Col xs={12} lg={7}>
								<div className="movie-content">
									<h1 className="title  mb-4">{show.title || show.name}</h1>
									<div className="genres mb-4">
										{!!show.genres?.length &&
											show.genres.slice(0, 5).map((genre) => (
												<span key={genre.id} className="genres-item ms-2">
													{genre.name}
												</span>
											))}
									</div>
									<p className="overview mb-4">{show.overview}</p>
									<div className="casts mb-4">
										<div className="section">
											<h4 className="title mb-3">Casts</h4>
											<CastList id={show.id} />
										</div>
									</div>
								</div>
							</Col>
						</Row>
						<div className="section mb-3">
							<VideoList id={show.id} />
						</div>
						<div className="section mb-3">
							<ShowsList title="Similar" category={category} id={show.id} type="similar" />
						</div>
					</Container>
				</div>
			)}
		</>
	);
};

export default Details;
