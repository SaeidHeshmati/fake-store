import Head from "next/head";

export default function Product({ product }) {
    if (product) {
        return (
            <div>
                <Head>
                    <title>{product.title}</title>
                    <meta name="description" content={`${product.description}`}/>
                </Head>
                <h1>id: { product.id }</h1>
                <h1>id: { product.title }</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1> Product not found </h1>
            </div>
        )
    }
}

export async function getServerSideProps({ params }) {
    const product = await fetch(`https://fakestoreapi.com/products/${params.id}`).then(r => r.json());
    console.log(product);
    return {
        props: {
            product
        }
    }
}