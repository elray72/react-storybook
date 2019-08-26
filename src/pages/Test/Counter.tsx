import * as React from 'react';
import Panel from './Panel';

// interface ICounter {
// 	count: number;
// 	renders: number;
// }

export default class Counter<ICounter> extends React.Component {
	state = {
		count: 0,
		renders: 0,
	};

	increment = () => {
		this.setState({
			count: (this.state.count + 1)
		});
	};

	decrement = () => {
		this.setState({
			count: (this.state.count - 1)
		});
	};

	render () {
		this.state.renders++;
		return (
			<div>
				<h1>Class component</h1>
				<Panel count={this.state.count} />
				<p>Renders: {this.state.renders}</p>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</div>
		);
	}
}
