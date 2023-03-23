import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";

function ProductComponent({ product }) {
	const addToWishlist = () => {
		const productsString = localStorage.getItem("produse");
		if (productsString !== null) {
			const products = JSON.parse(productsString);

			const existNr = products.find((productElement) => {
				return productElement.id === product.id;
			});
			if (existNr === undefined) {
				products.push(product);
			}

			localStorage.setItem("produse", JSON.stringify(products));
		} else {
			const newProducts = [];
			newProducts.push(product);
			localStorage.setItem("produse", JSON.stringify(newProducts));
		}
	};
	return (
		<Col className='mt-4'>
			<Card className='text-center' color='light' outline>
				<img alt='Sample' src={product.image} weight='150' height='250' />
				<CardBody>
					<CardTitle tag='h4'>{product.title}</CardTitle>
					<CardText>${product.price}</CardText>
					<Button
						color='dark'
						size='sm'
						onClick={() => {
							addToWishlist();
						}}>
						Add to wishlist!
					</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default ProductComponent;
