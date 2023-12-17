import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import aluminum from '../../../Gallery/Products/aluminum.jpg'
/* import glass from '../../../Gallery/Products/glass.jpg' */
import { useEffect, useState } from 'react';
import { ProductResponse } from '@information-system/mylib';
/* import axios from 'axios'; */

const ProductCard = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const PRODUCTURI = 'http://localhost:4200/api/products';

  const getProducts = async () => {
    try {
      const result = await fetch(PRODUCTURI);
      const res = await result.json();
      setProducts(res as ProductResponse[]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      getProducts();
    })();
  }, []);

  /* const defaultImg = () => {
    if (products.title === 'Aluminum') {
      return aluminum 
    } else {
      return glass
    }
  }  */

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {products.map((product) => (
        <Card
          key={product._id}
          className=""
          shadow="sm"
          isPressable
          onPress={() => console.log('Modal (add to cart or nah)')}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={product.title}
              className="w-full object-cover h-[140px]"
              src={aluminum}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{product.title}</b>
            <p className="text-default-500">{product.price}</p>
            <p className="text-default-500">{product.description}</p>
            <p className="text-default-500">{product.category}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
