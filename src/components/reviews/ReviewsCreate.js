import React from 'react';
import {Create, SimpleForm, ReferenceInput, SelectInput, NumberInput} from 'react-admin';

const CategoriesCreate = (props) => {
	return (
		<Create {...props} title="Crear Tipo de Negocio">
			<SimpleForm redirect="list">
				<ReferenceInput source="user" reference="users">
					<SelectInput source="name" />
				</ReferenceInput>
				<ReferenceInput source="provider" reference="users">
					<SelectInput source="name" />
				</ReferenceInput>
				<ReferenceInput source="anounce" reference="anounces">
					<SelectInput source="title" />
				</ReferenceInput>
				<NumberInput source="rating" />
			</SimpleForm>
		</Create>
	);
};
export default CategoriesCreate;
