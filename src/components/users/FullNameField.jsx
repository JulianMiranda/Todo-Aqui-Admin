import * as React from 'react';
import {memo} from 'react';
import {useStyles} from './UsersStyles';
import AvatarField from './AvatarField';

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
