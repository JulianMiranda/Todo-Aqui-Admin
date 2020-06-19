import React from 'react';
import {Edit, TextInput, ImageInput, ImageField, SimpleForm, BooleanInput} from 'react-admin';
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
								<TextInput label="Nombre" fullWidth source="name" />
							</Grid>{' '}
							<Grid item sm={12} xs={12}>
								<ImageInput
									source="image"
									resource="categories"
									accept="image/*"
									placeholder={<p>Drop your file here</p>}
									fullWidth
								>
									<ImageField source="url" />
								</ImageInput>

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
