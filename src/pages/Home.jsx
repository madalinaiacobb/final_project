import { useState, useEffect } from "react";
import { UncontrolledCarousel } from "reactstrap";
import TrendingComponent from "../components/TrendingComponent";
import "./Home.style.css";

function Home() {
	const [trendingList, setTrendingList] = useState(null);
	useEffect(() => {
		fetch("'https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((trendingListAPI) => setTrendingList(trendingListAPI));
	}, []);

	return (
		<div className='home_page'>
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

			<div className='categories_list d-flex'></div>
			<h4>Trending Products</h4>
			<div className='trending_list d-flex '>
				<TrendingComponent />
			</div>
		</div>
	);
}
export default Home;
