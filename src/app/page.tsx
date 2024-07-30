import TextBanner from "@/components/TextBanner";
import Container from "@/components/Container";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import styles from '../assets/styles/product-card.module.css';

import data from "./data.json";

const renderProductCards = (products, filterCondition) => {
  return products
    .filter(filterCondition)
    .flatMap(product => 
      product.variants.map(variant => (
        <ProductCard key={variant.id} product={product} variant={variant} />
      ))
    );
};

export default function Home() {
  const { products } = data; 
  
  const cookwareFilter = product => 
    product.product_type === 'Cookware Singles' || product.tags.includes('cookware');

  const prepwareFilter = product => 
    product.product_type === 'Prepware' || product.tags.includes('Prepware');

  return (
    <main>
      <Container as="section">
        <TextBanner
          header="Clean Cooking Has Arrived"
          subheader="Explore Our Best Sellers"
          body="Made with naturally smooth ceramic, not synthetics like polytetrafluoroethylene (such as Teflon®)"
          theme="navy"
        />

        {/* insert cookware and bakeware here */}
        <div className={styles.cards_container}>
          {renderProductCards(products, cookwareFilter)}
        </div>

        <Marquee
          items={[
            {
              text: 'We believe non-toxic cooking surfaces and thoughtful design lead to cleaner cooking.',
              id: '1'
            },
            {
              text: 'Good Looking. Clean Cooking.',
              id: '2'
            }
          ]}
          theme="babyBlue300"
        />

        <TextBanner
          header="Quality Accessories"
          body="Be ready for any recipe with Caraway’s extended Cookware family."
        />

        {/* insert prepware accessories here */}
        <div className={styles.cards_container}>
          {renderProductCards(products, prepwareFilter)}
        </div>
      </Container>
    </main>
  );
}
