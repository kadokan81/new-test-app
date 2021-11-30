import { TextField } from '@mui/material';

export interface ISearchBarProps {
	onInput: any;
}

const SearchBar = ({ onInput }: ISearchBarProps) => {
	return (
		<div>
			<h5
				style={{
					marginBottom: '10px',
				}}>
				Filter by keywords
			</h5>
			<TextField
				label='Search And Highlight'
				onInput={onInput}
				placeholder='search'
				style={{
					width: '600px',
					height: '50px',
					border: '1px solid #EAEAEA',
					boxShadow: ' 0px 8px 24px rgba(0, 0, 0, 0.05)',
					borderRadius: ' 5px',
				}}
			/>
		</div>
	);
};

export default SearchBar;
