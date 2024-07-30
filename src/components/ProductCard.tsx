import React from 'react';
import styles from '../assets/styles/product-card.module.css';
import Image from 'next/image';

const ProductCard = ({ product, variant }) => {
  const imageUrl = variant.featured_image?.src || product.image.src;
  const showCompareAtPrice = variant.compare_at_price > 0 && variant.compare_at_price !== variant.price;
  const checkVariantAvailable = variant.available ? styles.button : styles.button_out_stock;

  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={product.title}
        className={styles.image}
        width={500} // Specify a width
        height={300} // Specify a height
      />
      <div className={styles.card_information}>
        <div className={styles.card_information_content}>
          <h2 className={styles.title}>{product.title} | {variant.title}</h2>
          <div className={styles.price_container}>
            <p className={styles.price}>${variant.price}</p>
            {showCompareAtPrice && (
              <p className={styles.compare_at_price}>${variant.compare_at_price}</p>
            )}
          </div>
        </div>
        <button className={checkVariantAvailable}>{variant.available ? ("Add To Cart") : ("Out Of Stock")} </button>
      </div>
    </div>
  );
};

export default ProductCard;
