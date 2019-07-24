import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }: any) => {
	//let input: HTMLInputElement;

	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputRef.current) {
			if (!inputRef.current.value.trim()) return;
			dispatch(addTodo(inputRef.current.value));
			inputRef.current.value = '';
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{/*<input ref={(node) => (input = node ? node : input)} />*/}
				<input ref={inputRef} />
				<button type="submit">Add Todo</button>
			</form>
		</div>
	);
};

export default connect()(AddTodo);
