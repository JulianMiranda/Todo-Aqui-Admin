import React from 'react';
import {Filter, ReferenceInput, AutocompleteInput, SelectInput} from 'react-admin';

export const Filters = (props) => (
	<Filter {...props}>
		<ReferenceInput label="Anuncio" source="anounce" reference="anounces">
			<AutocompleteInput optionText={(choice) => (choice.title ? `${choice.title}` : '')} />
		</ReferenceInput>
		<ReferenceInput
			label="Proveedor"
			source="provider"
			reference="users"
			sort={{field: 'id', order: 'ASC'}}
		>
			<SelectInput source="name" />
		</ReferenceInput>
		<ReferenceInput
			label="Usuario"
			source="user"
			reference="users"
			sort={{field: 'id', order: 'ASC'}}
		>
			<SelectInput source="name" />
		</ReferenceInput>
	</Filter>
);
