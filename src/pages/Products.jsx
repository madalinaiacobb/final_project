import { useState, useEffect } from "react";
import { Spinner, Input, Row, Button, Badge } from "reactstrap";
import ProductComponent from "../components/ProductComponent";
import "./Products.style.css";

function Products() {
	const [productList, setProductList] = useState(null);
	const [categoryList, setCategoryList] = useState(null);

	// Variabile de stare pt filtrari

	const [textInput, setTextInput] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);

	// Pasul de adaugare date din API

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((productListAPI) => setProductList(productListAPI));

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categoryListAPI) => setCategoryList(categoryListAPI));
	}, []);

	return (
		<div className='product_page'>
			{productList && categoryList ? (
				<div className='d-flex'>
					<div className='product_categories m-3 d-flex flex-column'>
						<h5>Product Categories</h5>
						{categoryList.map((category, index) => {
							return (
								<Badge
									className='mt-2'
									key={"category_" + index}
									color={category === selectedCategory ? "success" : "dark"}
									onClick={() => {
										setSelectedCategory(category);
									}}>
									{category}
								</Badge>
							);
						})}
						<Button
							className='mt-3'
							color='dark'
							size='sm'
							onClick={() => {
								setSelectedCategory(null);
							}}>
							Clear Filter!
						</Button>
					</div>
					<div className='product_list'>
						<Input
							placeholder='Search'
							className='w-25 mt-3'
							value={textInput}
							onChange={(event) => {
								setTextInput(event.target.value);
							}}
						/>
						<Row xs='1' lg='5'>
							{productList
								.filter((product) => {
									return (
										selectedCategory === null ||
										selectedCategory === product.category
									);
								})
								.filter((product) => {
									return product.title
										.toLowerCase()
										.includes(textInput.toLowerCase());
								})
								.map((product, index) => {
									return (
										<ProductComponent
											product={product}
											key={"product_" + index}
										/>
									);
								})}
						</Row>
					</div>
				</div>
			) : (
				<Spinner>Loading...</Spinner>
			)}
		</div>
	);
}

export default Products;
