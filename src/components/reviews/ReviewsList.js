import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	ReferenceField,
	NumberField,
	EditButton,
	SimpleList,
} from 'react-admin';
import {Filters} from './Filters';
import {useMediaQuery} from '@material-ui/core';

const CategoriesList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	return (
		<List
			{...props}
			title="Categorías"
			sort={{field: 'createdAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			{isSmall ? (
				<SimpleList
					primaryText={(record) => record.name}
					secondaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
				/>
			) : (
				<Datagrid /* rowClick="show" */>
					<ReferenceField source="anounce" reference="anounces" link={false} label="Anuncio">
						<TextField source="title" />
					</ReferenceField>
					<ReferenceField source="user" reference="users" link={false} label="Usuario">
						<TextField source="name" />
					</ReferenceField>
					<ReferenceField source="provider" reference="users" link={false} label="Proveedor">
						<TextField source="name" />
					</ReferenceField>
					<NumberField label="Rating" source="rating" />
					<EditButton label="Editar" />
				</Datagrid>
			)}
		</List>
	);
};
export default CategoriesList;
