import {UploadImage} from '../firebase/uploadImage';

export const PrepareCreateObject = async (resource, params) => {
	console.log(resource, 'resource');
	console.log(params, 'params');

	if (resource === 'categories') return await categories(resource, params);
	else if (resource === 'subcategories') return subcategories(resource, params);
	else if (resource === 'anounces') return anounces(resource, params);
	else if (resource === 'reviews') return reviews(resource, params);

	return {};
};
const categories = async (resource, params) => {
	const object = {};
	object.name = params.data.name;
	/* const url = await UploadImage(resource, [params.data.image]);

	object.image = {url: url[0]}; */

	return object;
};
const subcategories = async (resource, params) => {
	const object = {};

	object.name = params.data.name;
	object.category = params.data.category;

	const url = await UploadImage(resource, [params.data.image]);
	object.image = {url: url[0]};

	return object;
};

const anounces = async (resource, params) => {
	const object = {};

	object.title = params.data.title;
	object.provider = params.data.provider;
	object.category = params.data.category;

	if (params.data.images && params.data.images.length > 0) {
		let urls = [];

		const addImages = params.data.images.filter((image) => !image.id);
		if (addImages.length > 0) {
			urls = await UploadImage(resource, addImages);
		}

		if (urls.length > 0) {
			object.images = urls.map((url) => ({
				url,
			}));
		}
	}

	return object;
};

const reviews = async (resource, params) => {
	const object = {};

	object.user = params.data.user;
	object.provider = params.data.provider;
	object.anounce = params.data.anounce;
	object.rating = params.data.rating;
	return object;
};
