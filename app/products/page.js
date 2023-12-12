import Link from 'next/link';

export default function Products() {
	return (
		<div>
			<h1>Products page</h1>
			<p><Link href="/products/sesame">Sesame</Link></p>
			<p><Link href="/products/peanut">Peanut</Link></p>
			<p><Link href="/products/cotton">Cotton</Link></p>
		</div>
	);
}