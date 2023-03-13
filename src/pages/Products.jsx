import { useState, useEffect } from "react";
import { Spinner, Input, Row } from "reactstrap";
import ProductComponent from "../components/ProductComponent";
import "./Products.style.css";

function Products() {
	const [productList, setProductList] = useState(null);
	const [categorieList, setCategorieList] = useState(null);

	// Pasul de adaugare date din API

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((productListAPI) => setProductList(productListAPI));

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categorieListAPI) => setCategorieList(categorieListAPI));
	}, []);

	return (
		<>
			{productList && categorieList ? (
				<div className='d-flex'>
					<div className='product_categories'>
						<h3>Product Categories</h3>
						{categorieList.map((categorie, index) => {
							return <h5 key={"categorie_" + index}> - {categorie}</h5>;
						})}
					</div>
					<div className='product_list'>
						<h5>Search</h5>
						<Input className='w-25' />
						<Row>
							{productList.map((product, index) => {
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
		</>
	);
}

export default Products;
