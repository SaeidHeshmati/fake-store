import Head from "next/head";
import styles from "/styles/modules/product.module.css";
import Rate from "/components/Rate";

export default function Product({ product }) {
    if (product) {
        return (
            <div className={styles.body}>
                <Head>
                    <title>{product.title}</title>
                    <meta name="description" content={`${product.description}`}/>
                </Head>
                <div className={styles.background}>
                    <div className={styles.container}>
                        <div className={styles.imgHolder}>
                            <img src={product.image} className={styles.img}></img>
                        </div>
                        <div className={styles.infoHolder}>
                            <Rate rating={product.rating.rate}/>
                            <h1>id: { product.id }</h1>
                            <h1>id: { product.title }</h1>
                        </div>
                    </div>
                </div>
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