import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ArticlePage from './pages/FullArticlePage';
import NewsListPAge from './pages/NewsListPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: ['Montserrat', 'sans-serif'].join(','),
	},
});

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path='/' element={<NewsListPAge />} />
					<Route path='/news' element={<ArticlePage />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
