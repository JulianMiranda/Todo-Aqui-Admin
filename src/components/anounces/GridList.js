import React from 'react';
import MuiGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import withWidth from '@material-ui/core/withWidth';
import {Link} from 'react-router-dom';
import {NumberField} from 'react-admin';
import {linkToRecord} from 'ra-core';
import {useStyles} from './OffersStyles';
import NotFoundImage from '../../common/No-Image-Found-400x264.png';

const getColsForWidth = (width) => {
	if (width === 'xs') return 2;
	if (width === 'sm') return 3;
	if (width === 'md') return 4;
	if (width === 'lg') return 5;
	return 6;
};

const times = (nbChildren, fn) => Array.from({length: nbChildren}, (_, key) => fn(key));

const LoadingGridList = ({width, nbItems = 10}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<MuiGridList cellHeight={180} cols={getColsForWidth(width)} className={classes.gridList}>
				{' '}
				{times(nbItems, (key) => (
					<GridListTile key={key}>
						<div className={classes.placeholder} />
					</GridListTile>
				))}
			</MuiGridList>
		</div>
	);
};

const LoadedGridList = ({ids, data, basePath, width}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<MuiGridList cellHeight={180} cols={getColsForWidth(width)} className={classes.gridList}>
				{ids.map((id) => (
					<GridListTile component={Link} key={id} to={linkToRecord(basePath, data[id].id)}>
						{data[id].images[0] && <img src={data[id].images[0].url} alt="" />}
						<img src={NotFoundImage} alt="" />

						<GridListTileBar
							className={classes.tileBar}
							title={data[id].name}
							subtitle={
								<span>
									<NumberField
										className={classes.priceGrid}
										source="price"
										record={data[id]}
										color="inherit"
										options={{
											style: 'currency',
											currency: 'EUR',
										}}
									/>
								</span>
							}
						/>
					</GridListTile>
				))}
			</MuiGridList>
		</div>
	);
};

const GridList = ({loaded, ...props}) =>
	loaded ? <LoadedGridList {...props} /> : <LoadingGridList {...props} />;

export default withWidth()(GridList);
