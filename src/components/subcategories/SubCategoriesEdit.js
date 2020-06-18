import React from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ReferenceInput,
	ImageField,
	SelectInput,
	SimpleForm,
	BooleanInput,
} from 'react-admin';
import {SubCategoriesTitle} from './SubCategoriesTitle';
import {Grid, CardContent, Card} from '@material-ui/core';

const SubCategoriesEdit = (props) => {
	return (
		<Edit {...props} title={<SubCategoriesTitle />}>
			<SimpleForm redirect="list">
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item sm={6} xs={12}>
								<TextInput label="Nombre" fullWidth source="name" />
							</Grid>{' '}
							<Grid item sm={6} xs={12}>
								<ReferenceInput
									label="Categoría"
									fullWidth
									source="category.id"
									reference="categories"
								>
									<SelectInput source="name" />
								</ReferenceInput>
							</Grid>
							<Grid item sm={12} xs={12}>
								<ImageInput
									source="image"
									resource="subcategories"
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
export default SubCategoriesEdit;
