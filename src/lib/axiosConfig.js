import Axios from "axios";
import apiConfig from "../api/apiConfig";

export default Axios.create({
	baseURL: apiConfig.BASE_URL,
	headers: {
		Accept: "application/json",
	},
	params: {
		api_key: apiConfig.apiKey,
	},
});
