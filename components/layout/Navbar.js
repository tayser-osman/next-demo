import Link from 'next/link';

export default function Navbar() {
	return (
		<div>
			<ul>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/products">Products</Link></li>
				<li><Link href="/contact">Contact</Link></li>
				<li><Link href="/about">About</Link></li>
			</ul>
		</div>
	);
}