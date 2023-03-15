import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";

function ProductComponent({ product }) {
	return (
		<Col className='mt-4'>
			<Card>
				<img alt='Sample' src={product.image} weight='200' height='300' />
				<CardBody>
					<CardTitle tag='h4'>{product.title}</CardTitle>
					<CardText>{product.description}</CardText>
					<Button>Add to wishlist</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default ProductComponent;
