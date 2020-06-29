import React from 'react';
import {Edit, TextInput, Toolbar, FormWithRedirect, BooleanInput} from 'react-admin';
import {Grid, CardContent, Card} from '@material-ui/core';
import {CategoriesTitle} from './CategoriesTitle';

const CategoriesEdit = (props) => {
	return (
		<Edit {...props} title={<CategoriesTitle />} component="div">
			<CategoriesForm />
		</Edit>
	);
};
const CategoriesForm = (props) => {
	return (
		<FormWithRedirect
			{...props}
			render={(formProps) => (
				<Card>
					<form>
						<CardContent>
							<Grid container spacing={2}>
								<Grid item sm={6} xs={12}>
									<TextInput label="Nombre" source="name" />
								</Grid>{' '}
								<Grid item sm={12} xs={12}>
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
							resource="categories"
						/>
					</form>
				</Card>
			)}
		/>
	);
};

export default CategoriesEdit;
