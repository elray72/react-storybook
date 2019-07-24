import React from 'react';

interface IProps {
	onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
	completed: boolean;
	text: string;
}

const ToDo: React.FC<IProps> = ({ onClick, completed, text }) => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none',
		}}
	>
		{text}
	</li>
);



export default ToDo;
