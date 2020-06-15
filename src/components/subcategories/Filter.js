import React from 'react';
import {Filter, ReferenceInput, SearchInput, SelectInput} from 'react-admin';

const OffersFilter = (props) => (
	<Filter {...props}>
		<SearchInput source="q" alwaysOn />
		<ReferenceInput source="category" reference="categories" sort={{field: 'id', order: 'ASC'}}>
			<SelectInput source="name" />
		</ReferenceInput>
	</Filter>
);
export default OffersFilter;
