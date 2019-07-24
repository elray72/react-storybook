import * as React from 'react';
import styled from 'styled-components';
import AddToDo from './containers/AddToDo';
import Footer from './components/Footer';
import VisibleToDoList from './containers/VisibleToDoList';

interface IProps {
	children?: React.ReactNode;
	className?: string;
}

const Div = styled.div`
	width: 300px;
	border: 1px solid black;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	
`;

const ToDo: React.FC<IProps> = (props) => {
	return (
		<Div>
			<AddToDo />
			<VisibleToDoList />
			<Footer />
		</Div>
	);
};

export default ToDo;
