import React from 'react';
import {List, Pagination} from 'react-admin';
import GridList from './GridList';
import AnounceFilter from './Filters';

const OffersList = (props) => (
	<List
		{...props}
		filters={<AnounceFilter />}
		perPage={10}
		pagination={<Pagination rowsPerPageOptions={[10, 20, 40]} />}
		sort={{field: 'id', order: 'ASC'}}
		exporter={false}
	>
		<GridList />
	</List>
);

export default OffersList;

/* import * as React from 'react';
import {EditButton, Datagrid, ReferenceField, TextField, List} from 'react-admin';
import {ListControllerProps} from 'ra-core';
import inflection from 'inflection';
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	makeStyles,
} from '@material-ui/core';

import FullNameField from '../users/FullNameField';
import AnounceFilter from './Filters';
import LinkToRelatedOpportunities from './LinkToRelatedOpp';

const useStyles = makeStyles({
	root: {
		marginTop: '1em',
	},
	media: {
		height: 140,
	},
	title: {
		paddingBottom: '0.5em',
	},
	actionSpacer: {
		display: 'flex',
		justifyContent: 'space-around',
	},
});

const AnounceGrid = (props) => {
	const classes = useStyles(props);
	const {data, ids} = props;
	return ids ? (
		<Grid container spacing={2} className={classes.root}>
			{ids.map((id) => (
				<Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2} item>
					<Card>
						<CardMedia image={data[id].images[0].url} className={classes.media} />
						<CardContent className={classes.title}>
							<Typography variant="h5" component="h2" align="center">
								{inflection.humanize(data[id].title)}
							</Typography>
						</CardContent>
						<CardActions classes={{spacing: classes.actionSpacer}}>
							<TextField source="provider.name" record={data[id]} />
							<EditButton basePath="/anounces" record={data[id]} />
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	) : null;
};

const AnounceList = (props) => (
	<List
		{...props}
		sort={{field: 'id', order: 'ASC'}}
		perPage={20}
		filters={<AnounceFilter />}
		component="div"
		exporter={false}
	>
		<AnounceGrid />
	</List>
);

export default AnounceList; */

/* 
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
		<GridList /> */

/* 

{
	<Datagrid>
			<TextField label="Título" source="title" />
			<NumberField label="Rating" source="ratingAvg" />

			<ReferenceField source="provider" reference="users">
				<FullNameField />
			</ReferenceField>
			<ReferenceField source="category" reference="categories" link={false} label="Categoría">
				<TextField source="name" />
			</ReferenceField>
			<EditButton label="Editar" />
		</Datagrid> */

/* 
}
{
	
	</List>
);

export default AnounceList; 
}
*/
