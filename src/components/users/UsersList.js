import React from 'react';
import {List, Datagrid, BooleanField, EditButton, EmailField, TextField} from 'react-admin';
import {Filters} from './Filters';

const UsersList = (props) => {
	return (
		<List
			{...props}
			title="Usuarios"
			sort={{field: 'updatedAt', order: 'DESC'}}
			filters={<Filters />}
			exporter={false}
		>
			<Datagrid rowClick="show">
				<EmailField label="Correo" source="email" />
				<TextField label="Rol" source="role" />
				<BooleanField label="Estado" source="status" />
				<EditButton label="Editar" />
			</Datagrid>
		</List>
	);
};
export default UsersList;
