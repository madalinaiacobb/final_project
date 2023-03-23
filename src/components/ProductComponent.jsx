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
		<Col className='mt-4' style={{ minHeight: "550px" }}>
			<Card className='text-center' style={{ minHeight: "100%" }}>
				<img alt='Sample' src={product.image} weight='150' height='250' />
				<CardBody className='d-flex flex-column'>
					<CardTitle tag='h4' className='mt-auto'>
						{product.title}
					</CardTitle>
					<CardText className='mt-auto'>${product.price}</CardText>
					<Button
						className='mt-auto'
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
