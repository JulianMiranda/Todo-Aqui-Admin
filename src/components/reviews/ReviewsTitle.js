import React from 'react';

export const ReviewsTitle = ({record}) => {
	return <span>Comentario {record ? `"${record.user.name}"` : ''}</span>;
};
