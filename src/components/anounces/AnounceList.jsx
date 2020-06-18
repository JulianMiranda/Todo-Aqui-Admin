import * as React from 'react';
import {List, Datagrid, TextField, EditButton, DateField, ReferenceField} from 'react-admin';

import AnounceFilter from './Filters';
/* 
import FullNameField from '../visitors/FullNameField'; */

const AnounceList = (props) => (
	<List {...props} filters={<AnounceFilter />} perPage={10} exporter={false}>
		<Datagrid>
			<DateField source="updatedAt" />
			<TextField source="title" />
			<ReferenceField source="provider" reference="users">
				{/* <FullNameField /> */}
				<TextField source="name" />
			</ReferenceField>
			<ReferenceField source="category" reference="categories" link={false} label="Categoría">
				<TextField source="name" />
			</ReferenceField>
			<EditButton label="Editar" />
		</Datagrid>
	</List>
);

export default AnounceList;
