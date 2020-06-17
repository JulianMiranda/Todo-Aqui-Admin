import React from 'react';
import {Edit, TextInput, SimpleForm, BooleanInput} from 'react-admin';
import {Grid, CardContent, Card} from '@material-ui/core';
import {CategoriesTitle} from './CategoriesTitle';

const CategoriesEdit = (props) => {
	return (
		<Edit {...props} title={<CategoriesTitle />}>
			<SimpleForm redirect="list">
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item sm={6} xs={12}>
								<TextInput label="Nombre" fullWidth source="name" />
							</Grid>{' '}
							<Grid item sm={12} xs={12}>
								<BooleanInput label="Estado" source="status" />
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</SimpleForm>
		</Edit>
	);
};
export default CategoriesEdit;
