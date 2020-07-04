import React from 'react';
import {
	Create,
	ImageInput,
	ImageField,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	AutocompleteInput,
} from 'react-admin';

const OpportunitiesCreate = (props) => {
	return (
		<Create {...props} title="Crear Categoría">
			<SimpleForm redirect="list">
				<ReferenceInput label="Anuncio" source="anounce" reference="anounces">
					<AutocompleteInput optionText={(choice) => (choice.title ? `${choice.title}` : '')} />
				</ReferenceInput>
				<SelectInput
					source="state"
					choices={[
						{id: 'OPP', name: 'Oportunidad'},
						{id: 'QUOT', name: 'Cotizacón'},
						{id: 'ORDER', name: 'Orden'},
					]}
				/>
				<ReferenceInput label="Proveedor" source="provider" reference="users">
					<SelectInput source="name" />
				</ReferenceInput>
				<ReferenceInput label="Usuario" source="user" reference="users">
					<SelectInput source="name" />
				</ReferenceInput>
				<ImageInput
					source="images"
					resource="anounces"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					multiple="true"
					fullWidth
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};
export default OpportunitiesCreate;
