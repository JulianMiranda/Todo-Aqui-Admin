import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from '../categories/CategoriesStyles';
import {Link} from 'react-router-dom';
import {stringify} from 'query-string';

import opportunities from '../opportunities';

const LinkToRelatedOpportunities = ({record}) => {
	const classes = useStyles();
	return record ? (
		<Button
			size="small"
			color="primary"
			component={Link}
			to={{
				pathname: '/opportunities',
				search: stringify({
					page: 1,
					perPage: 25,
					sort: 'id',
					order: 'DESC',
					filter: JSON.stringify({category: record.id}),
				}),
			}}
			className={classes.link}
		>
			<opportunities.icon className={classes.icon} />
			Oport
		</Button>
	) : null;
};

export default LinkToRelatedOpportunities;
