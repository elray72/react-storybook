import React from 'react';
import Page from '../../components/templates/Page';
import Counter from './Counter';
import CounterFc from './CounterFc';
import Users from './Users';

interface IProps {
	className?: string;
}

const Home: React.FC<IProps> = () => {
	return (
		<Page className="home">
			<h1>Test</h1>
			<Counter />
			<hr/>
			<CounterFc />
			<hr/>
			<Users/>
		</Page>
	);
};

export default Home;
