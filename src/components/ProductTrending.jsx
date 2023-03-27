import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";

function ProductTrending() {
	return (
		<Col>
			<Card
				style={{
					width: "15vw",
				}}>
				<img alt='Sample' src='https://picsum.photos/300/200' />
				<CardBody>
					<CardTitle tag='h5'>Card title</CardTitle>

					<CardText>
						Some quick example text to build on the card title and make up the
						bulk of the card‘s content.
					</CardText>
					<Button>Add to wishlist!</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default ProductTrending;
