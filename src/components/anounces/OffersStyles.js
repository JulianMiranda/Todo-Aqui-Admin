import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	price: {width: '7em'},
	priceGrid: {
		display: 'inline',
		fontSize: '1em',
	},
	link: {
		color: '#fff',
	},
	root: {
		margin: '-2px',
	},
	gridList: {
		width: '100%',
		margin: 0,
	},
	tileBar: {
		background:
			'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
	},
	placeholder: {
		backgroundColor: theme.palette.grey[300],
		height: '100%',
	},
	rootPoster: {display: 'inline-block', marginTop: '1em', zIndex: 2},
	contentPoster: {padding: 0, '&:last-child': {padding: 0}},
	imgPoster: {
		width: 'initial',
		minWidth: 'initial',
		maxWidth: '25em',
		maxHeight: '15em',
		marginRight: '10px',
	},
}));
