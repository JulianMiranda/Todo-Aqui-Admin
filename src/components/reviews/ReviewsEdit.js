import React from 'react';
import {Edit, ReferenceInput, SelectInput, SimpleForm, BooleanInput, TextInput} from 'react-admin';
import {ReviewsTitle} from './ReviewsTitle';
import {Grid, CardContent, Card} from '@material-ui/core';

const CategoriesEdit = (props) => {
	return (
		<Edit {...props} title={<ReviewsTitle />}>
			<SimpleForm redirect="list">
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item sm={6} xs={12}>
								<ReferenceInput label="Usuario" source="user.id" reference="users">
									<SelectInput source="name" />
								</ReferenceInput>
							</Grid>{' '}
							<Grid item sm={12} xs={12}>
								<ReferenceInput label="Proveedor" source="provider.id" reference="users">
									<SelectInput source="name" />
								</ReferenceInput>
								<ReferenceInput label="Anuncio" source="anounce.id" reference="anounces">
									<SelectInput source="title" />
								</ReferenceInput>

								<TextInput source="recomendations" />
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
