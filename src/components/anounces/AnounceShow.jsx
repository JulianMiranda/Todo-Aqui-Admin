import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useShowController, Show, ImageField} from 'react-admin';
import {AnounceTitle} from './AnounceTitle';
import {useStyles} from './AnounceStyles';
import {CustomBoolean} from '../../common/fields/Boolean';

const AnounceShow = (props) => {
	const {record} = useShowController(props);
	const classes = useStyles();
	if (!record) return null;
	return (
		<Show title={<AnounceTitle />} {...props}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Typography variant="h4" gutterBottom align="center">
								{record.title}
							</Typography>
							<Typography variant="h5" gutterBottom align="center">
								Categoría: <i>{record.category.name}</i>
							</Typography>
							<Typography variant="h5" gutterBottom align="center">
								Rating: <i>{record.ratingAvg}</i>
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<Typography variant="h5" gutterBottom align="center">
										Creado{' '}
									</Typography>
									<Typography gutterBottom align="center">
										{new Date(record.createdAt).toLocaleDateString()}
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography variant="h5" gutterBottom align="center">
										Editado{' '}
									</Typography>
									<Typography gutterBottom align="center">
										{new Date(record.updatedAt).toLocaleDateString()}
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								<div className={classes.Space}>&nbsp;</div>
								<Typography variant="h5" gutterBottom align="center">
									Status
								</Typography>
								<Typography variant="h6" gutterBottom align="center">
									<CustomBoolean record={record} label="Estado" source="status" />
								</Typography>
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12}>
								<ImageField record={record} align="center" source="images" src="url" />
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Show>
	);
};

export default AnounceShow;
