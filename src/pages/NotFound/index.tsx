import React from 'react';
import Page from '../../components/templates/Page';
import ToDo from '../../examples/ToDo';

interface IProps {
	className?: string;
}

const Home: React.FC<IProps> = () => {
	return (
		<Page className="home">
			<h1>Not found</h1>
		</Page>
	);
};

export default Home;
