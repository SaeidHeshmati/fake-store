import Link from "next/link";

export default function Products({ products }) {
    return (
        <div>
            <h1>All Products</h1>
            {
                products.map( product => (
                    <Link href={'products/' + product.id} key={ product.id }>
                        <a>
                            <h3>{ product.title }</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export async function getServerSideProps() {
    const products = await fetch('https://fakestoreapi.com/products').then(r => r.json());
    console.log(products);
    return {
        props: {
            products
        }
    }
}