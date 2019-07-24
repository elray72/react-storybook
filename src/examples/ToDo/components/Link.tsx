import * as React from 'react';

interface IProps {
	active: boolean;
	children: React.ReactNode;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Link: React.FC<IProps> = ({ active, children, onClick }) => (
	<button
		onClick={onClick}
		disabled={active}
		style={{
			marginLeft: '4px',
		}}
	>
		{children}
	</button>
);

export default Link;
