import React from 'react';
import {
	Edit,
	FormTab,
	NumberInput,
	ReferenceInput,
	SelectInput,
	TabbedForm,
	TextInput,
} from 'react-admin';
import {InputAdornment} from '@material-ui/core';
import {useStyles} from './OffersStyles';
import Poster from './Poster';

const OfferTitle = ({record}) => (
	<span>
		Oferta: <i>{record.name}</i>
	</span>
);
const ProductEdit = (props) => {
	const classes = useStyles();
	return (
		<Edit {...props} title={<OfferTitle />}>
			<TabbedForm>
				<FormTab label="Fotos">
					<Poster />
				</FormTab>
				<FormTab label="details" path="details">
					<TextInput source="name" />
					<ReferenceInput source="subcategory" reference="subcategories">
						<SelectInput source="name" />
					</ReferenceInput>
					<NumberInput
						source="price"
						className={classes.price}
						InputProps={{
							startAdornment: <InputAdornment position="start">€</InputAdornment>,
						}}
					/>

					<TextInput source="description"></TextInput>
				</FormTab>
			</TabbedForm>
		</Edit>
	);
};

export default ProductEdit;
