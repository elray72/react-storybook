import React from 'react';
import Page from '../../components/templates/Page';
import Wizard from '../../components/organisms/Wizard';
import Step from '../../components/organisms/Wizard/Step';
import ToDo from '../../examples/ToDo';

interface IProps {
	className?: string;
}

const Home: React.FC<IProps> = () => {
	return (
		<Page className="home">
			<Wizard>
				<Step step={1} prev={1} next={2}>
					<h1>Step 1</h1>
				</Step>
				<Step step={2} prev={1} next={3}>
					<h1>Step 2</h1>
				</Step>
				<Step step={3} prev={2} next={3}>
					<h1>Step 3</h1>
				</Step>
			</Wizard>
		</Page>
	);
};

export default Home;
