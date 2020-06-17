import React from 'react';
import {Filter, ReferenceInput, SearchInput, SelectInput} from 'react-admin';

const AnounceFilter = (props) => (
	<Filter {...props}>
		<SearchInput source="q" alwaysOn />
		<ReferenceInput source="provider" reference="users" sort={{field: 'id', order: 'ASC'}}>
			<SelectInput source="name" />
		</ReferenceInput>
		<ReferenceInput source="category" reference="categories" sort={{field: 'id', order: 'ASC'}}>
			<SelectInput source="name" />
		</ReferenceInput>
	</Filter>
);
export default AnounceFilter;
