import React from 'react';

export const OpportunitiesTitle = ({record}) => {
	return <span>Oportunidad {record ? `"${record.name}"` : ''}</span>;
};
