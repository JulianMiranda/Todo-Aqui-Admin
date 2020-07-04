import React from 'react';
import {
	Edit,
	ImageInput,
	ReferenceInput,
	ImageField,
	SelectInput,
	Toolbar,
	BooleanInput,
	AutocompleteInput,
	FormWithRedirect,
} from 'react-admin';
import {Grid, CardContent, Card} from '@material-ui/core';
import {OpportunitiesTitle} from './OpportunitiesTitle';

const OpportunitiesEdit = (props) => {
	return (
		<Edit {...props} title={<OpportunitiesTitle />} component="div">
			<OpportunitiesForm />
		</Edit>
	);
};

const OpportunitiesForm = (props) => {
	return (
		<FormWithRedirect
			{...props}
			render={(formProps) => (
				<Card>
					<form>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item sm={6} xs={12}>
									<ReferenceInput label="Anuncio" source="anounce.id" reference="anounces">
										<AutocompleteInput
											optionText={(choice) => (choice.title ? `${choice.title}` : '')}
										/>
									</ReferenceInput>
								</Grid>
								<Grid item sm={6} xs={12}>
									<BooleanInput label="Estado" source="status" />
								</Grid>
								<Grid item sm={6} xs={12}>
									<ReferenceInput label="Proveedor" source="provider.id" reference="users">
										<SelectInput source="name" />
									</ReferenceInput>
								</Grid>

								<Grid item sm={6} xs={12}>
									<ReferenceInput label="Usuario" source="user.id" reference="users">
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
								</Grid>
							</Grid>
						</CardContent>

						<Toolbar
							record={formProps.record}
							basePath={formProps.basePath}
							undoable={true}
							invalid={formProps.invalid}
							handleSubmit={formProps.handleSubmit}
							saving={formProps.saving}
							resource="subcategories"
						/>
					</form>
				</Card>
			)}
		/>
	);
};
export default OpportunitiesEdit;
