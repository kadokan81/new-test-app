import * as React from 'react';
import { Article, IinitialState, Response } from './apiResponse.types';

type Action =
	| { type: 'SET_DATA'; payload: any }
	| { type: 'SEARCH_INPUT'; payload: any }
	| { type: 'SEARCH_DATA'; payload: any };
type Dispatch = (action: Action) => void;
type State = {
	isLoading: boolean;
	data: Response | {};
	search: string;
	searchData: Article[];
};
type GlobalProviderProps = { children: React.ReactNode };

const GlobalContext = React.createContext<
	{ state: State; dispatch: Dispatch } | undefined
>(undefined);

const initialState: State = {
	isLoading: true,
	data: {},
	search: '',
	searchData: [],
};

const reducer = (state: IinitialState, action: Action) => {
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

function GlobalContextProvider({ children }: GlobalProviderProps) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const value = { state, dispatch };
	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
}

function useCustomeContext() {
	const context = React.useContext(GlobalContext);

	if (context === undefined) {
		throw new Error('useCount must be used within a CountProvider');
	}
	return context;
}

export { GlobalContextProvider, useCustomeContext };
