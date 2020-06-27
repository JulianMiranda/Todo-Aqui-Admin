import {compareFilterSub} from './compareFilterSub';
import {FilterOpp} from './filterOpp';

export const PrepareGetObject = async (resource, params) => {
	if (resource === 'users') return await user(params);
	else if (resource === 'categories') return common(params);
	else if (resource === 'subcategories') return subcategories(resource, params);
	else if (resource === 'anounces') return anounce(params);
	else if (resource === 'opportunities') return opportunities(params);
	return {};
};

const user = (params) => {
	const population = [{path: 'image', fields: {url: true, status: true}}];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: queryFilter,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population,
	};

	return query;
};

const subcategories = async (resource, params) => {
	const population = [
		{
			path: 'images',
			filter: {status: true},
			fields: {
				url: true,
			},
		},
	];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const filterP = await compareFilterSub(queryFilter);

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: filterP,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population,
	};

	return query;
};

const common = async (params) => {
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: queryFilter,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
	};

	if (JSON.stringify(query) === '{}') return null;

	return query;
};

const anounce = async (params) => {
	const population = [{path: 'image', fields: {url: true, status: true}}];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const search = q ? {text: q, fields: ['title']} : {};

	const filterP = await compareFilterSub(queryFilter);
	const query = {
		filter: filterP,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population,
	};

	if (JSON.stringify(query) === '{}') return null;

	return query;
};
const opportunities = async (params) => {
	const population = [{path: 'image', fields: {url: true, status: true}}];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const search = q ? {text: q, fields: ['name']} : {};

	const filterP = await FilterOpp(queryFilter);

	const query = {
		filter: filterP,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population,
	};

	return query;
};
