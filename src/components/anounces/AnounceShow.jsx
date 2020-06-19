import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {useShowController, ReferenceField, TextField} from 'react-admin';

/* import Basket from '../orders/Basket'; */

/* const CustomerField = ({record}) =>
	record ? (
		<Typography>
			{record.first_name} {record.last_name}
			<br />
			{record.address}
			<br />
			{record.city}, {record.zipcode}
		</Typography>
	) : null; */

const AnounceShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();

	if (!record) return null;
	return (
		<Card className={classes.root}>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Typography variant="h6" gutterBottom>
							{record.title}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="h6" gutterBottom align="right">
							<img src={record.images[0].url} alt="" />
						</Typography>
					</Grid>
				</Grid>
				{/* <Grid container spacing={2}>
					<Grid item xs={12} container alignContent="flex-end">
						<ReferenceField
							resource="users"
							reference="users"
							source="provider"
							basePath="/users"
							record={record}
							link={false}
						>
							<TextField source="name" />
						</ReferenceField>
					</Grid>
				</Grid> */}
				<div className={classes.spacer}>&nbsp;</div>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Typography variant="h6" gutterBottom align="center">
							Date{' '}
						</Typography>
						<Typography gutterBottom align="center">
							{new Date(record.updatedAt).toLocaleDateString()}
						</Typography>
					</Grid>

					<Grid item xs={5}>
						<Typography variant="h6" gutterBottom align="center">
							Categoría
						</Typography>
						<ReferenceField
							resource="anounces"
							reference="categories"
							source="category"
							basePath="/anounces"
							record={record}
							link={false}
						>
							<TextField source="name" align="center" component="p" gutterBottom />
						</ReferenceField>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default AnounceShow;

const useStyles = makeStyles({
	root: {width: 600, margin: 'auto'},
	spacer: {height: 20},
	invoices: {margin: '10px 0'},
});
