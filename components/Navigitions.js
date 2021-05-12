import Link from "next/link";

const Navigitions = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">
						<a>Index</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href="/services">
						<a>Services</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigitions;
