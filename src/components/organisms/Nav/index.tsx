import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './_nav.scss';

interface IProps {
	children?: Link[] | any;
	className?: string;
	dispatch?: Function;
	expanded?: boolean;
	marker?: boolean;
}

const Nav: React.FC<IProps> = (props) => {
	const navItemsRef = React.useRef([]) as any;
	const navLineRef = React.useRef<HTMLSpanElement>(null);
	const navItems = props.children.length ? props.children : [props.children];
	const [resizing, setResizing] = React.useState(false);

	React.useEffect(() => {
		const _moveMarker = () => moveMarkerToLink(navItemsRef.current[0]);
		_moveMarker();

		const _windowResizeHandler = () => {
			if (!resizing) {
				setResizing(true);
				setTimeout(function() {
					setResizing(false);
				}, 250);
			}
		};

		window.addEventListener('resize', () => {
			_moveMarker();
			_windowResizeHandler();
		});
	}, [navItemsRef]);

	const moveMarkerToLink = (elem: any) => {
		const marker = navLineRef.current;
		const link = elem as HTMLButtonElement;
		const linkPadding = 8;

		if (marker && link) {
			const linkWidth = link.offsetWidth - (linkPadding * 2);
			const translateX = Math.floor(linkWidth/2) + link.offsetLeft + linkPadding;
			marker.style.transform = `translateX(${translateX}px) scaleX(${linkWidth})`;
		}
	};

	const handleClick = (e: React.MouseEvent<any>) => {
		moveMarkerToLink(e.target);
	};

	const navMarker = props.marker ? (
		<span className="nav__marker" ref={navLineRef} />
	) : null;

	const renderNavItem = (item: any, i: number) => {
		return React.cloneElement(item, {
			onClick: handleClick,
			ref: (el: any) => (navItemsRef.current[i] = el),
		});
	};

	const componentClass = classNames(props.className, 'nav', {
		'nav--expanded': props.expanded,
		'nav--resizing': resizing,
	});

	return (
		<nav className={componentClass}>
			<ul className="nav__list">
				{(navItems || []).map((n: Link | any, i: number) => {
					return (
						<li className="nav__item" key={`nav_item_${i}`}>
							{renderNavItem(n, i)}
						</li>
					);
				})}
			</ul>
			{navMarker}
		</nav>
	);
};

const mapStateToProps = (state: any, ownProps: any) => {
	const { nav } = state;
	return {
		expanded: nav.expanded,
		...ownProps,
	};
};

export default connect(mapStateToProps)(Nav);
