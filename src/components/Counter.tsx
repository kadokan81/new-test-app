import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	counter: {
		height: '2.5rem',
		margin: '0 .5rem',
		textAlign: 'center',
		borderBottom: '1px solod gray',
	},
	type: {
		display: 'block',
		width: '100%',
		height: '40px',
		lineHeight: '2.5rem',
		borderBottom: '1px solid gray',
		margin: '10px 0px 30px 0px',
	},
});
export interface CounterProps {
	result: any;
}

const Counter = ({ result }: CounterProps) => {
	const classes = useStyles();

	return (
		<Typography className={classes.type}>
			{result && 'Results:' + result}
		</Typography>
	);
};

export default Counter;
