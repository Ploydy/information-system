import { Button } from '@nextui-org/react';

import { Link } from 'react-router-dom';
import Aluminum from '../Aluminum/Aluminum';
import Glass from '../Glass/Glass';

const Products = () => {
  return (
    <div className="my-10">
      <Button>
        <Link to="/admin/products/new">Add Product</Link>
      </Button>
      <div className="my-20 ">
       <h1>Aluminum</h1> 
        <div>
          <Aluminum />
        </div>
      </div>
      <div>
        <h1>Glass</h1>
        <div>
          <Glass />
        </div>
      </div>
    </div>
  );
};

export default Products;
