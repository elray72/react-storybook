import * as React from 'react';
import Helmet from 'react-helmet';
import { Link,  Route, Switch } from 'react-router-dom';
import 'sanitize.css';
import '../themes/light/style.scss';

import Header from './organisms/Header';
import Nav from './organisms/Nav';

import Home from '../pages/Home';
import ToDo from '../pages/ToDo';
import Test from '../pages/Test';
import NotFound from '../pages/NotFound';
import NavButton from './atoms/Hamburger';
import Logo from './atoms/Logo';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet titleTemplate="React SPA Example - %s" defaultTitle="React SPA example by elray72">
				<meta name="description" content="React SPA example. Built on Typescript and Redux." />
			</Helmet>
			<Header>
				<Logo src="/assets/img/r-logo.svg" title="R logo" />
				<Nav>
					<Link to="/" className="nav__link" title="Home">
						Home
					</Link>
					<Link to="/test" className="nav__link" title="About">
						About
					</Link>
				</Nav>
				<NavButton />
			</Header>
			<main className="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/todo" component={ToDo} />
					<Route path="/test" component={Test} />
					<Route component={NotFound} />
				</Switch>
			</main>
		</React.Fragment>
	);
};

export default App;
