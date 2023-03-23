import { UncontrolledCarousel, Button } from "reactstrap";

function Home() {
	return (
		<UncontrolledCarousel
			items={[
				{
					altText: "Slide 1",
					caption:
						" John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
					key: 1,
					src: "https://picsum.photos/id/250/700/200",
				},
				{
					altText: "Slide 2",
					caption: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
					key: 2,
					src: "https://picsum.photos/id/1059/700/200",
				},
				{
					altText: "Slide 3",
					caption:
						"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
					key: 3,
					src: "https://picsum.photos/id/998/700/200",
				},
			]}
		/>
	);
}

export default Home;
