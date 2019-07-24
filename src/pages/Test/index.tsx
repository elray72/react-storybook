import React from 'react';
import Page from '../../components/templates/Page';

interface IProps {
	className?: string;
}

const Home: React.FC<IProps> = () => {
	return (
		<Page className="home">
			<h1>Test</h1>
		</Page>
	);
};

export default Home;
