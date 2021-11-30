import { Card, Typography } from '@mui/material';
import { Article } from '../apiResponse.types';
import ArrowRight from '../ui/ArrowRight';
import CalendarIcon from '../ui/CalendarIcon';
import { Link } from 'react-router-dom';

export interface ICardNewsProps {
	post: Article;
}

const Item = ({ post }: ICardNewsProps) => {
	const createMarkup = (html: any) => {
		return { __html: html };
	};

	const formatDate = (dateString: any) => {
		var options: any = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString('en-US', options);
	};

	return (
		<Card
			style={{
				width: '400px',
				height: '530px',
				margin: '10px',
				background: 'white',
				overflow: 'hidden',
				position: 'relative',
				boxShadow: ' 0px 8px 24px rgba(0, 0, 0, 0.05)',
				borderRadius: '5px',
			}}>
			<div
				style={{
					width: '100%',
					height: '217px',
					background: `url(${post.urlToImage}) 0 0/cover no-repeat`,
				}}></div>
			<div
				style={{
					padding: '25px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
				}}>
				<span
					style={{
						marginBottom: '25px',
						display: 'flex',
						alignItems: 'center',
					}}>
					<span style={{ marginRight: '10px' }}>
						<CalendarIcon />
					</span>
					{formatDate(post.publishedAt)}
				</span>
				<Typography
					variant='h6'
					gutterBottom
					dangerouslySetInnerHTML={createMarkup(post.title)}
					style={{
						maxHeight: '60px',
						overflow: 'hidden',
						marginBottom: '20px',
					}}
				/>

				<Typography
					variant='subtitle1'
					style={
						{
							// maxHeight: '100px',
							// marginBottom: '5px',
						}
					}
					dangerouslySetInnerHTML={createMarkup(
						post.description.substring(0, 100)
					)}
				/>

				<a
					href={post.url}
					target='_blank'
					rel='noreferrer'
					style={{
						position: 'absolute',
						bottom: '25px',
						left: '25px',
						fontWeight: '700',
						display: 'flex',
						alignItems: 'center',
					}}>
					<Link to={`/news`} state={{ post: post }}>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<h3 style={{ marginRight: '10px' }}>Read more</h3>
							<ArrowRight width={20} height={15} />
						</div>
					</Link>
				</a>
			</div>
		</Card>
	);
};

export default Item;
