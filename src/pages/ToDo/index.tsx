import React from 'react';
import Page from '../../components/templates/Page';
import ToDo from '../../examples/ToDo';

interface IProps {
	className?: string;
}

const Home: React.FC<IProps> = () => {
	return (
		<Page className="home">
			<ToDo />
		</Page>
	);
};

export default Home;
