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
import {Grid, CardContent, Card} from '@material-ui/core';

const AnounceTitle = ({record}) => (
	<span>
		Oferta: <i>{record.title}</i>
	</span>
);
const ProductEdit = (props) => {
	return (
		<Edit {...props} title={<AnounceTitle />}>
			<SimpleForm redirect="list">
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item sm={6} xs={12}>
								<TextInput label="Nombre" fullWidth source="title" />
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
								<ReferenceInput label="Proveedor" fullWidth source="provider.id" reference="users">
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
