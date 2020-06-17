import React from 'react';
import {List, Datagrid, EditButton, EmailField, TextField} from 'react-admin';
import {Filters} from './Filters';
import {CustomBoolean} from '../../common/fields/Boolean';

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
				<TextField label="Nombre" source="name" />
				<EmailField label="Correo" source="email" />
				<TextField label="Rol" source="role" />
				<CustomBoolean label="Estado" source="status" />
				<EditButton label="Editar" />
			</Datagrid>
		</List>
	);
};
export default UsersList;
