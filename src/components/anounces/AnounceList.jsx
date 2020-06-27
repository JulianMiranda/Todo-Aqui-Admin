import * as React from 'react';
import {List, Datagrid, NumberField, TextField, EditButton, ReferenceField} from 'react-admin';

import AnounceFilter from './Filters';

import FullNameField from '../users/FullNameField';

const AnounceList = (props) => (
	<List {...props} filters={<AnounceFilter />} title="Anuncios" perPage={10} exporter={false}>
		<Datagrid>
			<TextField label="Título" source="title" />
			<NumberField label="Rating" source="ratingAvg" />
			{/* <FullNameField /> */}
			<ReferenceField source="provider" reference="users">
				<FullNameField />
			</ReferenceField>
			<ReferenceField source="category" reference="categories" link={false} label="Categoría">
				<TextField source="name" />
			</ReferenceField>
			<EditButton label="Editar" />
		</Datagrid>
	</List>
);

export default AnounceList;
