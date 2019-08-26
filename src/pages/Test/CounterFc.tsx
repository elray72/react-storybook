import * as React from 'react';
import Panel from './Panel';

interface IProps {

}

export const CounterFc: React.FC<IProps> = (props) => {
//	console.log('renders');
	const [count, setCount] = React.useState(1);
	const [renders, setRenders] = React.useState(1);

	//setRenders(c => c + 1);

	React.useEffect(() => {
		document.title = `You clicked ${renders} times`;
	});

	const increment = () => {
		setCount(c => c + 1);
		setRenders(c => c + 1);
	};

	const decrement = () => {
		setCount(c => c - 1);
		setRenders(c => c + 1);
	};

	return (
		<div>
			<h1>Functional component</h1>
			<Panel count={count} />
			<p>Renders: {renders}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default CounterFc;
