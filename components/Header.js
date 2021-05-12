import Head from "next/head";
import Navigation from "./Navigitions";

// import { Logo } from "../assets/img/nextjs-logo.svg";

const Header = () => {
	return (
		<div>
			<Head>
				<title>Next js Project - test</title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css"
					integrity="sha384-9+PGKSqjRdkeAU7Eu4nkJU8RFaH8ace8HGXnkiKMP9I9Te0GJ4/km3L1Z8tXigpG"
					crossorigin="anonymous"
				></link>
			</Head>
			<header>
				<figure>
					<h2>logo</h2>
				</figure>
				<Navigation />
			</header>
		</div>
	);
};

export default Header;
