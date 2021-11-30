import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ArticlePage = () => {
	const location = useLocation();
	const { post } = location.state;

	return (
		<div>
			<div
				style={{
					background: `url(${post.urlToImage}) 0 0/cover no-repeat`,
					height: '245px',
					position: 'relative',
				}}>
				{''}
			</div>
			<div
				style={{
					position: 'relative',
					maxWidth: '1000px',
					height: '400px',
					top: '100px',
					backgroundColor: 'white',
					margin: '-250px auto',
					padding: '50px 75px',
					border: '1px solid #EAEAEA',
					boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
					borderRadius: '5px',
				}}>
				<h2
					style={{
						marginBottom: '50px',
						alignSelf: 'center',
						color: '#363636',
					}}>
					{post.title.replace(/<[^>]*>/g, '')}
				</h2>
				<p style={{ color: '#363636', marginBottom: '10px' }}>
					{post.description.replace(/<[^>]*>/g, '')}
				</p>
				<p style={{ color: '#363636', marginBottom: '10px' }}>
					{post.description.replace(/<[^>]*>/g, '')}
				</p>{' '}
				<p style={{ color: '#363636', marginBottom: '10px' }}>
					{post.description.replace(/<[^>]*>/g, '')}
				</p>
			</div>
			<Link
				style={{
					position: 'absolute',
					bottom: '20px',
					left: '250px',
					display: 'flex',
					alignItems: 'center',
				}}
				to='/'>
				<ArrowBack />
				Back to homepage
			</Link>
		</div>
	);
};

export default ArticlePage;
