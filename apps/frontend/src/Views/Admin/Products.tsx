import { Button } from '@nextui-org/react';

import { Link } from 'react-router-dom';
import Aluminum from '../Aluminum/Aluminum';
import Glass from '../Glass/Glass';

const Products = () => {
  return (
    <div className="">
      <div className="my-20 ">
        <h1 className="my-2 text-4xl">Aluminum</h1>
        <div>
          <Button className="my-3">
            <Link to="/admin/products/aluminumnew">Add Product</Link>
          </Button>
          <Aluminum />
        </div>
      </div>
      <div>
        <h1 className="my-2 text-4xl">Glass</h1>
        <div>
          <Button className="my-3">
            <Link to="/admin/products/glassnew">Add Product</Link>
          </Button>
          <Glass />
        </div>
      </div>
    </div>
  );
};

export default Products;
