import styles from "./ProductItem.module.css";

export default function ProductItem({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>
        <b>Price:</b> ${product.price}
      </p>
      <p className={styles.id}>
        <b>ID:</b> {product.id}
      </p>
      <p className={styles.description}>{product.description}</p>
    </div>
  );
}
