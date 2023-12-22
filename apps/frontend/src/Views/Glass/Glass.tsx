import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react';
import glassBG from '../../Gallery/Products/glass.jpg';
import { useEffect, useState } from 'react';
import { GlassResponse } from '@information-system/mylib';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Glass = () => {
  const [ glasses, setGlasses] = useState<GlassResponse[]>([]);
  const PRODUCTURI = 'http://localhost:4200/api/glass';

  const getGlass = async () => {
    try {
      const result = await fetch(PRODUCTURI);
      const res = await result.json();
      setGlasses(res as GlassResponse[]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      getGlass();
    })();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:4200/api/glass/${id}`
      );
      if (response.status === 200) {
        getGlass();
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
      {glasses.map((glass) => (
        <Link to={`/admin/products/${glass._id}`}>
          <Card
            key={glass._id}
            className=""
            shadow="sm"
            isPressable
            onPress={() => handleUpdate(glass._id)}
          >
            <CardHeader>
              <p>{glass.category}</p>
            </CardHeader>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={glass.title}
                className="w-full object-cover h-[140px]"
                src={glassBG}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{glass.title}</b>
              <p className="text-default-500">${glass.price}</p>
              <p className="text-default-500">{glass.description}</p>
              <Button onClick={() => handleDelete(glass._id)}>
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

export default Glass;
