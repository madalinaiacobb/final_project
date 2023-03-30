import { useEffect, useState } from "react";
import {
	Button,
	Card,
	CardImgOverlay,
	CardImg,
	CardTitle,
	Table,
} from "reactstrap";

function Wishlist() {
	const [wishlistProducts, setWishlistProducts] = useState([]);

	useEffect(() => {
		const productsString = localStorage.getItem("produse");
		if (productsString !== null) {
			const products = JSON.parse(productsString);
			setWishlistProducts(products);
		}
	}, []);
	const onDelete = (productId) => {
		const filteredProducts = wishlistProducts.filter(
			(product) => product.id !== productId
		);
		localStorage.setItem("produse", JSON.stringify(filteredProducts));
		setWishlistProducts(filteredProducts);
	};

	return (
		<>
			<div>
				<Card inverse>
					<CardImg
						alt='Card image'
						src='https://picsum.photos/id/535/900/270?'
						style={{
							height: 300,
						}}
						width='100%'
					/>
					<CardImgOverlay>
						<CardTitle tag='h3'>WISHLIST</CardTitle>
					</CardImgOverlay>
				</Card>
			</div>
			<h4>My Wishlist:</h4>
			<div>
				{wishlistProducts.map((product, index) => {
					return (
						<Table
							bordered
							size='sm'
							key={"product_" + index}
							className='text-center'>
							<thead>
								<tr className='table-success'>
									<th>{product.title}</th>
									<th> ${product.price}</th>
									<th>
										<Button
											className='ms-2 '
											size='sm'
											color='dark'
											onClick={() => {
												onDelete(product.id);
											}}>
											Delete
										</Button>
									</th>
								</tr>
							</thead>
						</Table>
					);
				})}
			</div>
		</>
	);
}

export default Wishlist;
