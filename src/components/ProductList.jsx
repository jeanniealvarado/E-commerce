import '../styles/product-list.css'
import { ProductCard } from './ProductCard';

function ProductList ({filteredProducts }) {
    return (
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    );
  }
  export { ProductList };