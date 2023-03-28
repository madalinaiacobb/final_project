import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";

function TrendingComponent({ trending }) {
	return (
		<Col className='mt-4' style={{ minHeight: "550px" }}>
			<Card className='text-center' style={{ minHeight: "100%" }}>
				<img alt='Sample' src={trending.image} weight='150' height='250' />
				<CardBody className='d-flex flex-column'>
					<CardTitle tag='h4' className='mt-auto'>
						{trending.title}
					</CardTitle>
					<CardText className='mt-auto'>${trending.price}</CardText>
					<Button className='mt-auto' color='dark' size='sm'>
						Add to wishlist!
					</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default TrendingComponent;
