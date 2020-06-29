import React from 'react';
import {
	Edit,
	TextInput,
	ImageInput,
	ReferenceInput,
	ImageField,
	SelectInput,
	Toolbar,
	FormWithRedirect,
	BooleanInput,
} from 'react-admin';
import {Grid, CardContent, Card} from '@material-ui/core';
import {AnounceTitle} from './AnounceTitle';

const ProductEdit = (props) => {
	return (
		<Edit {...props} title={<AnounceTitle />} component="div">
			<ProductForm />
		</Edit>
	);
};

const ProductForm = (props) => {
	return (
		<FormWithRedirect
			{...props}
			render={(formProps) => (
				<Card>
					<form>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item sm={4} xs={12}>
									<TextInput label="Título" source="title" />
								</Grid>{' '}
								<Grid item sm={4} xs={12}>
									<ReferenceInput label="Categoría" source="category.id" reference="categories">
										<SelectInput source="name" />
									</ReferenceInput>
								</Grid>
								<Grid item sm={4} xs={12}>
									<ReferenceInput label="Proveedor" source="provider.id" reference="users">
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
										label="Imágenes"
									>
										<ImageField source="url" />
									</ImageInput>

									<BooleanInput label="Estado" source="status" />
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
							resource="anounces"
						/>
					</form>
				</Card>
			)}
		/>
	);
};
export default ProductEdit;
