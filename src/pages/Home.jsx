import { useState, useEffect } from "react";
import {
	Spinner,
	Row,
	UncontrolledCarousel,
	Card,
	CardTitle,
	Button,
	CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import TrendingComponent from "../components/TrendingComponent";
import "./Home.style.css";

function Home() {
	const [trendingList, setTrendingList] = useState(null);
	const [categoriesList, setCategoriesList] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((trendingListAPI) => setTrendingList(trendingListAPI));

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categoriesListAPI) => setCategoriesList(categoriesListAPI));
	}, []);

	return (
		<>
			<UncontrolledCarousel
				items={[
					{
						altText: "Slide 1",
						caption:
							" John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
						key: 1,
						src: "https://picsum.photos/id/250/800/200",
					},
					{
						altText: "Slide 2",
						caption: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
						key: 2,
						src: "https://picsum.photos/id/1059/800/200",
					},
					{
						altText: "Slide 3",
						caption:
							"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
						key: 3,
						src: "https://picsum.photos/id/998/800/200",
					},
				]}
			/>
			<div className='categories_list m-3 d-flex flex-sm-column flex-lg-row'>
				{categoriesList.map((categories, index) => {
					return (
						<Row className='mt-2' key={"categories_" + index}>
							<Card className='text-center ' style={{ minHeight: "100%" }}>
								<img
									alt='Sample'
									src='https://picsum.photos/id/26/300/200'
									weight='50'
									height='150'
									className='mt-2'
								/>
								<CardBody>
									<CardTitle tag='h5' className='mt-auto'>
										{categories}
									</CardTitle>

									<Button
										className='mt-2'
										color='dark'
										size='sm'
										tag={Link}
										to='/products'>
										Discover Now
									</Button>
								</CardBody>
							</Card>
						</Row>
					);
				})}
			</div>
			<div className='home_page d-flex'>
				<div className='trending_list'>
					<div className='titletrending_products mt-3'>
						<h3>Trending Products</h3>
						<h5>List of top selling products:</h5>
					</div>

					{trendingList ? (
						<Row xs='1' lg='4'>
							{trendingList.map((trending, index) => {
								return (
									<TrendingComponent
										trending={trending}
										key={"trending_" + index}
									/>
								);
							})}
						</Row>
					) : (
						<Spinner></Spinner>
					)}
				</div>
			</div>
		</>
	);
}
export default Home;
