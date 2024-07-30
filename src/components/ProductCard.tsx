import React from 'react';
import Image from 'next/image';
import * as stylex from '@stylexjs/stylex';

const productCardContainer_card = stylex.create({
  card: {
      padding: '20px',    
      width: '23%',
      minWidth: '300px',
      textAlign: 'center',
  },    
  card_information: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px',
  },
  card_information_content: {
      textAlign: 'left',
  },
  image: {
      width: '100%',
      height: 'auto',
      animation: 'all 0.3s ease-in-out',
      ':hover': {
        cursor: 'pointer',
        borderRadius: '10px',
        scale: '1.1',
      }
  },
  title: {
      fontSize: '1em',
      margin: '10px 0',
      fontWeight: '400',
      color: '#000000',
  },
  price_container: {
      display: 'flex',
      gap: '5px',
  },    
  price: {
      fontSize: '0.8em',
      color: '#000000',
  },    
  compare_at_price: {
      textDecoration: 'line-through',
      fontSize: '0.8em',
      color: '#000000',
  },
  button: {
      backgroundColor: '#F3B224',
      color: '#000000',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      marginTop: '10px',
      textTransform: 'uppercase',
      borderRadius: '25px',
      fontWeight: '700',
      fontSize: '0.8em',
      animation: 'all 0.3s ease-in-out',
      minWidth: '160px',
      display: 'block',
      height: '40px',
      ':hover': {
        opacity: '0.7',
      }
  },   
  button_out_stock: {
    backgroundColor: '#F3B224',
    color: '#000000',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
    textTransform: 'uppercase',
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '0.8em',
    minWidth: '160px',
    display: 'block',
    height: '40px',
    pointerEvents: 'none',
    opacity: '0.7',
}
});

const ProductCard = ({ product, variant }) => {
  const imageUrl = variant.featured_image?.src || product.image.src;
  const showCompareAtPrice = variant.compare_at_price > 0 && variant.compare_at_price !== variant.price;

  return (
    <div {...stylex.props( productCardContainer_card.card )}>
      <Image
        src={imageUrl}
        alt={product.title}
        {...stylex.props( productCardContainer_card.image )}
        width={500} // Specify a width
        height={300} // Specify a height
      />
      <div {...stylex.props( productCardContainer_card.card_information )}>
        <div {...stylex.props( productCardContainer_card.card_information_content )}>
          <h2 {...stylex.props( productCardContainer_card.title )}>{product.title} | {variant.title}</h2>
          <div {...stylex.props( productCardContainer_card.price_container )}>
            <p {...stylex.props( productCardContainer_card.price )}>${variant.price}</p>
            {showCompareAtPrice && (
              <p {...stylex.props( productCardContainer_card.compare_at_price )}>${variant.compare_at_price}</p>
            )}
          </div>
        </div>
        <button {...variant.available ? ({...stylex.props( productCardContainer_card.button )}) : ({...stylex.props( productCardContainer_card.button_out_stock )})}>{variant.available ? ("Add To Cart") : ("Out Of Stock")} </button>
      </div>
    </div>
  );
};

export default ProductCard;
