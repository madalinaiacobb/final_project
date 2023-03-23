import { Link } from "react-router-dom";
import "./Navigation.style.css";

function Navigation() {
	return (
		<div className='navbar_product'>
			<div>
				<Link to='/home'> Home </Link>
				<Link to='/products'>All products</Link>
			</div>

			<div className='name_web'>
				<p>Outstock</p>
			</div>

			<Link to='/wishlist'>Wishlist</Link>
		</div>
	);
}

export default Navigation;
