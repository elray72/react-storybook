import React from 'react';
import ToDo from './ToDo';

interface ITodos {
	id: number;
	completed: boolean;
	text: string;
}

interface IProps {
	toDos: ITodos[];
	toggleTodo: Function;
}

const ToDoList: React.FC<IProps> = ({ toDos, toggleTodo }) => (
	<ul>
		{toDos.map((todo) => (
			<ToDo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
		))}
	</ul>
);

export default ToDoList;
