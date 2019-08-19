import PropTypes from 'prop-types';
import React from 'react';
import Router from '../../Router';
import Footer from '../../Footer';
import { StaticRouter } from 'react-router-dom';

const Page = ({ title, stylesheet, header, main, footer, script, _relativeURL, _ID }) => {
	const name = 'Paige Vogenthaler';
	const description = 'The portfolio of Paige Vogenthaler';

	return (
		<html>
		<head>
			<meta charSet='utf-8'/>
			<meta name='language' content='english' />
			<meta httpEquiv='content-type' content='text/html' />
			<meta name='author' content={name} />
			<meta name='designer' content={name} />
			<meta name='publisher' content={name} />
			<meta name='no-email-collection' content='http://www.unspam.com/noemailcollection/' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='description' content={description} />
			<meta name='subject' content={description} />
			<meta name='abstract' content={description} />
			<meta name='topic' content={description} />
			<meta name='keywords' content='Software Engineer' />
			<meta name='robots' content='index,follow' />
			<meta name='googlebot' content='index,follow' />
			<meta name='distribution' content='web' />
			<meta name='HandheldFriendly' content='true' />
			<title>{!!title ? `${title} | ` : ''}Paige Vogenthaler</title>
			<link rel='icon' href='/assets/favicon.png' type='image/png'></link>
			{!!stylesheet ? <link rel='stylesheet' href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)} /> : null}
		</head>
		<body>
			<div id='root'>
				<StaticRouter location={{ pathname: '/blog/index.html' }}>
					<Router>
						<div className='blogArticle'>
							<h2>{header}</h2>
							{main}
						</div>
					</Router>
				</StaticRouter>
				<Footer />
			</div>
			{!!script ? <script src={_relativeURL(`/assets/js/${script}.js`, _ID )} /> : null}
		</body>
		</html>
	);
};

Page.propTypes = {
	title: PropTypes.string.isRequired,
	main: PropTypes.node.isRequired,
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
