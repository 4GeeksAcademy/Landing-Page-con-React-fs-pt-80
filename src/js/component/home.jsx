import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<Card title="Card 1" text="This is card 1" imageUrl="https://www.casaruralazkue.com/wp-content/uploads/2014/12/500x350.gif" />
					<Card title="Card 2" text="This is card 2" imageUrl="https://www.casaruralazkue.com/wp-content/uploads/2014/12/500x350.gif" />
					<Card title="Card 3" text="This is card 3" imageUrl="https://www.casaruralazkue.com/wp-content/uploads/2014/12/500x350.gif" />
					<Card title="Card 4" text="This is card 4" imageUrl="https://www.casaruralazkue.com/wp-content/uploads/2014/12/500x350.gif" />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;