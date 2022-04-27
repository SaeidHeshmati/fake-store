import Head from "next/head";
import styles from "/styles/modules/product.module.css";
import Rate from "/components/Rate";
import { useState, useEffect } from 'react';

export default function Product({ product }) {
    if (product) {
        const size = useWindowSize();
        const width = size.width < 920 ? size.width/10 : 92;
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
                            <div className={styles.firstRow}>
                                <div className={styles.title} style={{width: `calc(100% - ${width + 16}px)`}}>{ product.title }</div>
                                <Rate className={styles.rate} rating={product.rating.rate} width={width}/>
                            </div>
                            <div className={styles.category}>{ product.category }</div>
                            <div className={styles.price}>${ product.price }</div>
                            <div className={styles.desTitle}>DESCRIPTION</div>
                            <div className={styles.description}>{ product.description }</div>
                            <div className={styles.buy}>ADD TO CART</div>
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
    return {
        props: {
            product
        }
    }
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }