import {fetchUtils} from 'react-admin';
import {getHeaders} from '../util/api';
import {PrepareGetObject} from '../util/prepareGetObject';

const apiUrl = process.env.REACT_APP_API_URL;
const httpClient = fetchUtils.fetchJson;

export default {
	getList: async (resource, params) => {
		const query = await PrepareGetObject(resource, params);
		const headers = await getHeaders();

		return httpClient(`${apiUrl}/${resource}/getList`, {
			method: 'POST',
			body: JSON.stringify(query),
			headers,
		}).then(({json}) => {
			return {
				data: json.data,
				total: json.count,
			};
		});
	},
};
