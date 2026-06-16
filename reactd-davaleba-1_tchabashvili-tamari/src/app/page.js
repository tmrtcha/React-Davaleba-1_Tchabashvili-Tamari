"use client";

import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";
import styles from "./page.module.css";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className={styles.center}>Loading products...</div>;
  }

  if (error) {
    return (
      <div className={`${styles.center} ${styles.error}`}>Error: {error}</div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
