import React from 'react';
import {Create, SimpleForm, TextInput, ImageInput, ImageField, required} from 'react-admin';

const CategoriesCreate = (props) => {
	return (
		<Create {...props} title="Crear Tipo de Negocio">
			<SimpleForm redirect="list">
				<TextInput source="name" validate={required()} />
				<ImageInput
					source="image"
					resource="categories"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					fullWidth
					validate={required()}
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};
export default CategoriesCreate;
