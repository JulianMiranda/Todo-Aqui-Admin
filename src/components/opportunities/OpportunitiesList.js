import * as React from 'react';
import {Fragment, useCallback, useEffect, useState} from 'react';
import {
	/* AutocompleteInput, */
	Datagrid,
	DateField,
	List,
	NumberField,
	ReferenceField,
	TextField,
} from 'react-admin';
import {
	makeStyles /* , useMediaQuery */,
	Divider,
	Tabs,
	Tab /* , Theme */,
} from '@material-ui/core';
import {Filters} from './Filters';
import {CustomBoolean} from '../../common/fields/Boolean';
import FullNameField from '../users/FullNameField';

const useDatagridStyles = makeStyles({
	total: {fontWeight: 'bold'},
});

const tabs = [
	{id: 'OPP', name: 'Oportunidad'},
	{id: 'QUOT', name: 'Cotizacion'},
	{id: 'ORDER', name: 'Orden'},
];

const TabbedDatagrid = ({ids, filterValues, setFilters, displayedFilters, ...rest}) => {
	const classes = useDatagridStyles();
	/* const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs')); */
	const [opp, setOpp] = useState([]);
	const [quot, setQuot] = useState([]);
	const [order, setOrder] = useState([]);

	useEffect(() => {
		if (ids && ids !== filterValues.state) {
			switch (filterValues.state) {
				case 'OPP':
					setOpp(ids);
					break;
				case 'QUOT':
					setQuot(ids);
					break;
				case 'ORDER':
					setOrder(ids);
					break;
				default:
					setOpp(ids);
					break;
			}
		}
	}, [ids, filterValues.state]);

	const handleChange = useCallback(
		(event, value) => {
			setFilters && setFilters({...filterValues, state: value}, displayedFilters);
		},
		[displayedFilters, filterValues, setFilters],
	);

	/* const selectedIds =
		filterValues.state === 'OPP' ? opp : filterValues.state === 'QUOT' ? quot : order;
 */
	return (
		<Fragment>
			<Tabs
				variant="fullWidth"
				centered
				value={filterValues.state}
				indicatorColor="primary"
				onChange={handleChange}
			>
				{tabs.map((choice) => (
					<Tab key={choice.id} label={choice.name} value={choice.id} />
				))}
			</Tabs>
			<Divider />

			<div>
				{filterValues.state === 'OPP' && (
					<Datagrid {...rest} ids={opp} optimized rowClick="edit">
						<ReferenceField
							source="anounce"
							reference="anounces"
							/* link={false} */ label="Anuncio"
						>
							<TextField source="title" />
						</ReferenceField>

						<ReferenceField source="provider" reference="users" link={false} label="Proveedor">
							<FullNameField />
						</ReferenceField>
						<ReferenceField source="user" reference="users" link={false} label="Usuario">
							<FullNameField />
						</ReferenceField>
						<DateField label="Fecha" source="updatedAt" showTime />
					</Datagrid>
				)}
				{filterValues.state === 'QUOT' && (
					<Datagrid {...rest} ids={quot} rowClick="edit">
						<ReferenceField
							source="anounce"
							reference="anounces"
							/* link={false} */ label="Anuncio"
						>
							<TextField source="title" />
						</ReferenceField>

						<ReferenceField source="provider" reference="users" link={false} label="Proveedor">
							<FullNameField />
						</ReferenceField>
						<ReferenceField source="user" reference="users" link={false} label="Usuario">
							<FullNameField />
						</ReferenceField>
						<NumberField
							source="cost"
							label="Costo"
							options={{
								style: 'currency',
								currency: 'USD',
							}}
							className={classes.total}
						/>

						<CustomBoolean label="Incluye IVA" source="iva" />
					</Datagrid>
				)}
				{filterValues.state === 'ORDER' && (
					<Datagrid {...rest} ids={order} rowClick="edit">
						<ReferenceField
							source="anounce"
							reference="anounces"
							/* link={false} */ label="Anuncio"
						>
							<TextField source="title" />
						</ReferenceField>

						<ReferenceField source="provider" reference="users" link={false} label="Proveedor">
							<FullNameField />
						</ReferenceField>
						<ReferenceField source="user" reference="users" link={false} label="Usuario">
							<FullNameField />
						</ReferenceField>
						<NumberField
							source="cost"
							label="Costo"
							options={{
								style: 'currency',
								currency: 'USD',
							}}
							className={classes.total}
						/>

						<CustomBoolean label="Incluye IVA" source="iva" />
					</Datagrid>
				)}
			</div>
		</Fragment>
	);
};

const OpportunitiesList = (props) => (
	<List
		{...props}
		filterDefaultValues={{state: 'OPP'}}
		sort={{field: 'date', order: 'DESC'}}
		perPage={25}
		filters={<Filters />}
		exporter={false}
		title="Oportunidades"
	>
		<TabbedDatagrid />
	</List>
);

export default OpportunitiesList;
