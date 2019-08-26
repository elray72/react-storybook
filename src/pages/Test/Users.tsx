import * as React from 'react';
import Panel from './Panel';

interface IProps {
	//count: number;
}

export const Users: React.FC<IProps> = (props) => {

	const [users, setUsers] = React.useState(null);

	React.useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/`).then(async (r) => {
			setUsers(await r.json());
		});
	}, []);

	console.log(users);


	return (
		<div>
			<h1>Functional component</h1>
			<ul>
				{(users || []).map(({id, name, email}) =>
					<li key={`user_${id}`}>
						My name is {name} and my email is {email}.
					</li>
				)}
			</ul>
		</div>
	);
};

export default Users;
