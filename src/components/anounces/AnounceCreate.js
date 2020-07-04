import React from 'react';

import {
	Create,
	TextInput,
	ImageInput,
	ImageField,
	ReferenceInput,
	SelectInput,
	Toolbar,
	FormWithRedirect,
	SimpleForm,
} from 'react-admin';
import {Box, Card, CardContent} from '@material-ui/core';

const AnouncesCreate = (props) => {
	return (
		<Create {...props} title="Crear Anuncio">
			<SimpleForm redirect="edit">
				<TextInput label="Nombre" source="title" resource="anounces" required fullWidth />
				<ReferenceInput source="category" reference="categories">
					<SelectInput source="name" />
				</ReferenceInput>
				<ReferenceInput source="provider" reference="users">
					<SelectInput source="name" />
				</ReferenceInput>
				<ImageInput
					source="images"
					resource="anounces"
					accept="image/*"
					placeholder={<p>Drop your file here</p>}
					fullWidth
					multiple="true"
				>
					<ImageField source="url" />
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};
export default AnouncesCreate;

/* 
const AnouncesCreate = (props) => {
	return (
		<Create {...props} component="div" title="Crear Anuncio">
			<AnounceForm />
		</Create>
	);
};

const AnounceForm = (props) => {
	return (
		<FormWithRedirect
			redirect="edit"
			{...props}
			render={(formProps) => (
				<Card>
					<form>
						<CardContent>
							<Box display={{md: 'block', lg: 'flex'}}>
								<Box flex={2} mr={{md: 0, lg: '1em'}}>
									<Box display={{xs: 'block', sm: 'flex'}}>
										<Box display={{xs: 'block', sm: 'block'}}>
											<Box flex={1} mr={{xs: 0, sm: '0.5em'}}>
												<TextInput
													label="Nombre"
													source="title"
													resource="anounces"
													required
													fullWidth
												/>
											</Box>

											<Box flex={1} mr={{xs: 0, sm: '0.5em'}}>
												<ReferenceInput source="category" reference="categories">
													<SelectInput source="name" />
												</ReferenceInput>
											</Box>
											<Box flex={1} mr={{xs: 0, sm: '0.5em'}}>
												<ReferenceInput source="provider" reference="users">
													<SelectInput source="name" />
												</ReferenceInput>
											</Box>
											<Box flex={1} mr={{xs: 0, sm: '0.5em'}}>
												<ImageInput
													source="images"
													resource="anounces"
													accept="image/*"
													placeholder={<p>Drop your file here</p>}
													fullWidth
													multiple="true"
												>
													<ImageField source="url" />
												</ImageInput>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
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
export default AnouncesCreate;
 */
