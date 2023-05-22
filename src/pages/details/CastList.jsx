import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import * as tmdbApiUrl from "../../api/tmdbApi";
import * as tmdApiQuery from "../../api/queries";

import "./_castlist.scss";
const CastList = ({ id }) => {
	const { category } = useParams();

	const [casts, setCasts] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await tmdApiQuery.credits(category, id);
			console.log(res);
			setCasts(res.data?.cast?.slice(0, 5));
		})();
	}, []);
	console.log(casts);
	return (
		<div className="casts d-flex flex-wrap gap-3">
			{casts?.map((cast) => (
				<div key={cast.id} className="casts-item">
					<div className="casts-img" style={{ backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})` }}></div>
					<p className="casts-name">{cast.name}</p>
				</div>
			))}
		</div>
	);
};

export default CastList;
