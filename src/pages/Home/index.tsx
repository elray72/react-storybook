import * as React from 'react';
import styled from 'styled-components';
import Page from '../../components/templates/Page';
import Wizard from '../../components/organisms/Wizard';
import Step from '../../components/organisms/Wizard/Step';
import ToDo from '../../examples/ToDo';
import NavButton from '../../components/atoms/Hamburger';

interface IProps {
	className?: string;
}

const StyledPageButton = styled(Page)`
	background: black;
`;

const StyledNavButton = styled(NavButton)`
	background: black;
`;

const Home: React.FC<IProps> = () => {
	return (
		<StyledPageButton className="home">
			<StyledNavButton />
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
		</StyledPageButton>
	);
};

export default Home;
