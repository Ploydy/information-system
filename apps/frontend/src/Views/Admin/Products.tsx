import { Button } from '@nextui-org/react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="my-10">
      <Button>
        <Link to="/admin/products/new">Add Product</Link>
      </Button>
      <div className="my-20 ">
        Aluminum
        <div>
          <ProductCard />
        </div>
      </div>
      <div>
        Glass
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
