import { Grid } from '@mui/material';
import * as React from 'react';
import { Article, IinitialState } from '../apiResponse.types';
import Counter from '../components/Counter';
import Item from '../components/Item';
import SearchBar from '../components/SearchBar';

export interface INewsListPAgeProps {}

const initialState: IinitialState = {
	isLoading: true,
	data: [],
	search: '',
	searchData: [],
};

const reducer = (state: IinitialState, action: any) => {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				data: action.payload,
				isLoading: false,
			};
		case 'SEARCH_INPUT':
			return { ...state, search: action.payload };
		case 'SEARCH_DATA':
			return { ...state, searchData: action.payload };
		default:
			throw new Error();
	}
};

export default function NewsListPAge(props: INewsListPAgeProps) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const fetchData = async (url: string) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			dispatch({ type: 'SET_DATA', payload: data });
		} catch (err) {
			console.log('Error:', err);
		}
	};

	React.useEffect(() => {
		fetchData(
			'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json'
		);
	}, []);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		let str = e.target.value;
		dispatch({ type: 'SEARCH_INPUT', payload: str });
		const newArr = state.data.articles
			.filter(
				(item: Article) =>
					item.title.toLowerCase().includes(str.toLowerCase()) ||
					item.description.toLowerCase().includes(str.toLowerCase())
			)
			.map((item: Article) => {
				let newTitle = item.title.replace(
					new RegExp(str, 'gi'),
					(match) => `<mark>${match}</mark>`
				);
				let newBody = item.description.replace(
					new RegExp(str, 'gi'),
					(match) => `<mark>${match}</mark>`
				);
				return {
					...item,
					title: newTitle,
					description: newBody,
				};
			});

		dispatch({ type: 'SEARCH_DATA', payload: newArr });
	};
	return (
		<Grid container style={{ padding: '30px 75px' }}>
			<SearchBar onInput={(e: any) => handleInput(e)} />
			<Counter
				result={
					state.searchData.length > 0 &&
					state.searchData.length < state.data.articles.length
						? state.searchData.length
						: null
				}
			/>

			<Grid container spacing={2} justifyContent='center' alignItems='center'>
				{state.isLoading ? (
					<p>Loading...</p>
				) : (
					<Grid container spacing={2}>
						{state.isLoading ? (
							<p>Loading...</p>
						) : state.search.length > 0 ? (
							state.searchData.map((art: Article) => {
								return (
									<Grid key={art.url} item xs={8} md={4}>
										<Item post={art} />
									</Grid>
								);
							})
						) : (
							state.data.articles.map((art: Article) => {
								return (
									<Grid key={art.url} item xs={8} md={4}>
										<Item post={art} />
									</Grid>
								);
							})
						)}
					</Grid>
				)}
			</Grid>
		</Grid>
	);
}
