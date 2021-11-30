export interface Response {
	status: string;
	totalResults: number;
	articles: Article[];
}
export interface Article {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
	url: string;
}

export interface IinitialState {
	isLoading: boolean;
	data: [];
	search: string;
	searchData: Article[];
}

export interface IRoute {
	path: string;
	name: string;
	exact: boolean;
	component: any;
	propd?: any;
}
