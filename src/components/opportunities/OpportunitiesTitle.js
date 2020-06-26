import React from 'react';

export const OpportunitiesTitle = ({record}) => {
	console.log(record, 'Record');

	return <span>Oportunidad {record ? `"${record.anounce.title}"` : ''}</span>;
};
