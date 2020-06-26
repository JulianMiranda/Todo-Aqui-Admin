import React from 'react';
import {
	Edit,
	ImageInput,
	ReferenceInput,
	ImageField,
	SelectInput,
	SimpleForm,
	BooleanInput,
	AutocompleteInput,
} from 'react-admin';
import {Grid, CardContent, Card} from '@material-ui/core';
import {OpportunitiesTitle} from './OpportunitiesTitle';

const ProductEdit = (props) => {
	return (
		<Edit {...props} title={<OpportunitiesTitle />}>
			<SimpleForm redirect="list">
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item sm={12} xs={12}>
								<ReferenceInput label="Anuncio" source="anounce.id" reference="anounces">
									<AutocompleteInput
										optionText={(choice) => (choice.title ? `${choice.title}` : '')}
									/>
								</ReferenceInput>

								{/* <ReferenceInput label="Anuncio" fullWidth source="anounce.id" reference="anounces">
									<SelectInput source="title" />
								</ReferenceInput> */}
							</Grid>
							<Grid item sm={12} xs={12}>
								<ReferenceInput label="Proveedor" fullWidth source="provider.id" reference="users">
									<SelectInput source="name" />
								</ReferenceInput>
							</Grid>

							<Grid item sm={12} xs={12}>
								<ReferenceInput label="Usuario" fullWidth source="user.id" reference="users">
									<SelectInput source="name" />
								</ReferenceInput>
							</Grid>

							<Grid item sm={12} xs={12}>
								<ImageInput
									source="images"
									resource="anounces"
									accept="image/*"
									placeholder={<p>Drop your file here</p>}
									multiple="true"
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

export default ProductEdit;
