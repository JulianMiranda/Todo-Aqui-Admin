import React from 'react';

import {
	Create,
	TextInput,
	ImageInput,
	ImageField,
	ReferenceInput,
	SelectInput,
	SimpleForm,
} from 'react-admin';
import {Box, Card, CardContent} from '@material-ui/core';

const AnouncesCreate = (props) => {
	return (
		<Create {...props} title="Crear Anuncio">
			<SimpleForm redirect="list">
				<Card>
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
				</Card>
			</SimpleForm>
		</Create>
	);
};
export default AnouncesCreate;
