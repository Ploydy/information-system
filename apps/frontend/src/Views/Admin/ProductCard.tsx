import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react';
/* import aluminum from '../../Gallery/Products/aluminum.jpg'; */
import glass from '../../Gallery/Products/glass.jpg';
import { useEffect, useState } from 'react';
import { ProductResponse } from '@information-system/mylib';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:4200/api/products/${id}`
      );
      if (response.status === 200) {
        getProducts();
      } else {
        console.error(`Failed to delete user with ID ${id}.`);
      }
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
    }
  };

  const handleUpdate = async (id: string) => {};

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {products.map((product) => (
        <Link to={`/admin/products/${product._id}`} >
          <Card
            key={product._id}
            className=""
            shadow="sm"
            isPressable
            onPress={() => handleUpdate(product._id)}
          >
            <CardHeader>
              <p>{product.category}</p>
            </CardHeader>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={product.title}
                className="w-full object-cover h-[140px]"
                src={glass}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{product.title}</b>
              <p className="text-default-500">${product.price}</p>
              <p className="text-default-500">{product.description}</p>
              <Button onClick={() => handleDelete(product._id)}>
                {' '}
                Delete{' '}
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
