import * as React from 'react';
import classNames from 'classnames';
import './_wizard.scss';
import { connect } from 'react-redux';
import { logTest } from './actions';

interface IProps {
	children?: React.ReactNode;
	className?: string;
	dispatch: Function;
	next?: number;
	prev?: number;
	step: number;
}

const Step: React.FC<IProps> = (props) => {
	const componentClass = classNames(props.className, 'wizard__step');

	console.log(props);

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		props.dispatch(logTest('hello_world'));
	};

	return (
		<div className={componentClass}>
			{props.children}
			<button type="button" onClick={handleSubmit}>
				Button
			</button>
		</div>
	);
};

export default connect()(Step);
