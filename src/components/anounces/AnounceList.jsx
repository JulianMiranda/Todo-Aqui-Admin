import * as React from 'react';
import {
	List,
	Pagination,
	Datagrid,
	NumberField,
	TextField,
	EditButton,
	ReferenceField,
} from 'react-admin';

import GridList from './GridList';

import AnounceFilter from './Filters';

import FullNameField from '../users/FullNameField';

const AnounceList = (props) => (
	<List
		{...props}
		filters={<AnounceFilter />}
		sort={{field: 'id', order: 'ASC'}}
		pagination={<Pagination rowsPerPageOptions={[10, 20, 40]} />}
		title="Anuncios"
		perPage={10}
		exporter={false}
	>
		<GridList />

		{/* <Datagrid>
			<TextField label="Título" source="title" />
			<NumberField label="Rating" source="ratingAvg" />

			<ReferenceField source="provider" reference="users">
				<FullNameField />
			</ReferenceField>
			<ReferenceField source="category" reference="categories" link={false} label="Categoría">
				<TextField source="name" />
			</ReferenceField>
			<EditButton label="Editar" />
		</Datagrid> */}
	</List>
);

export default AnounceList;
