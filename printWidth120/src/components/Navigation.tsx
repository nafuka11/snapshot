import { NavLink } from "react-router-dom";

const Navigation: React.VFC = () => {
	return (
		<nav className="main-nav">
			<ul>
				<li><NavLink to="/mountain">Mountain</NavLink></li>
				<li><NavLink to="/beach">Beaches</NavLink></li>
				<li><NavLink to="/bird">Birds</NavLink></li>
				<li><NavLink to="/food">Food</NavLink></li>
			</ul>
		</nav>
	)
}

export default Navigation;
