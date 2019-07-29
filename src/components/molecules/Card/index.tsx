import * as React from 'react';
import classNames from 'classnames';
//import './_hamburger.scss';

interface IProps {
	expanded?: boolean;
	type?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Card: React.FC<IProps> = (props) => {

	return (
		<div>
			<h1>This is a card</h1>
			<p>This is some text</p>
			<div>This is some more text</div>
		</div>
	);
};

export default Card;
