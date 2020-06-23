import React from 'react';
import {Filter, ReferenceInput, SelectInput} from 'react-admin';

export const Filters = (props) => (
	<Filter {...props}>
		<ReferenceInput
			label="Anuncio"
			source="anounce"
			reference="anounces"
			sort={{field: 'id', order: 'ASC'}}
		>
			<SelectInput source="title" />
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
