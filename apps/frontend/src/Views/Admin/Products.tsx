import ProductCard from './ProductCard';

/* 
const getProducts = async () => {
  try {
    const res = await fetch('http://localhost:4200/api/products', {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log('Failed to get products', error);
  }
}; 
*/

const Products = () => {
  return (
    <div className="my-10"> 
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
