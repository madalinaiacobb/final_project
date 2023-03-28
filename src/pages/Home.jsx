import { useState, useEffect } from "react";
import { Spinner, Row, UncontrolledCarousel } from "reactstrap";
import TrendingComponent from "../components/TrendingComponent";
import "./Home.style.css";

function Home() {
	const [trendingList, setTrendingList] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((trendingListAPI) => setTrendingList(trendingListAPI));
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

			<div className='home_page d-flex'>
				<div className='categories_list'></div>

				<div className='trending_list'>
					{trendingList ? (
						<>
							<Row xs='4'>
								{trendingList.map((trending, index) => {
									return (
										<TrendingComponent
											trending={trending}
											key={"trending_" + index}
										/>
									);
								})}
							</Row>
						</>
					) : (
						<Spinner></Spinner>
					)}
				</div>
			</div>
		</>
	);
}
export default Home;
