import * as React from 'react';
import {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import AvatarField from './AvatarField';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
	},
	avatar: {
		marginRight: theme.spacing(1),
	},
}));

const FullNameField = ({record, size}) => {
	const classes = useStyles();
	return record ? (
		<div className={classes.root}>
			<AvatarField className={classes.avatar} record={record} size={size} />
			{record.name}
		</div>
	) : null;
};

FullNameField.defaultProps = {
	source: 'name',
	label: 'Nombre',
};

export default memo(FullNameField);
