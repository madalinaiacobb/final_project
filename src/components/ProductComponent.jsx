import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";

function ProductComponent({ product }) {
	return (
		<Col className='mt-4'>
			<Card>
				<img
					alt='Sample'
					src={"https://picsum.photos/300/200?random=" + product.id}
				/>
				<CardBody>
					<CardTitle tag='h4'>{product.title}</CardTitle>
					<CardText>{product.description}</CardText>
					<h6>{product.id}</h6>
					<Button>Add to wishlist</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default ProductComponent;
