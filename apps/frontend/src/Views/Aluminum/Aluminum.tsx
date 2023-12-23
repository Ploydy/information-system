import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react';
import aluminumBG from '../../Gallery/Products/aluminum.jpg';
/* import glass from '../../Gallery/Products/glass.jpg'; */
import { useEffect, useState } from 'react';
import { AluminumResponse } from '@information-system/mylib';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Aluminum = () => {
  const [ aluminums, setAluminums ] = useState<AluminumResponse[]>([]);
  const PRODUCTURI = 'http://localhost:4200/api/aluminums';

  const getAluminum = async () => {
    try {
      const result = await fetch(PRODUCTURI);
      const res = await result.json();
      setAluminums(res as AluminumResponse[]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      getAluminum();
    })();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:4200/api/aluminum/${id}`
      );
      if (response.status === 200) {
        getAluminum();
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
      {aluminums.map((aluminum) => (
        <Link to={`/admin/products/${aluminum._id}`} >
          <Card
            key={aluminum._id}
            className=""
            shadow="sm"
            isPressable
            onPress={() => handleUpdate(aluminum._id)}
          >
            <CardHeader>
              <p>{aluminum.title}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-10 px-5">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={aluminum.title}
                className="w-full object-cover h-[140px]"
                src={aluminumBG}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>${aluminum.price}</b>
              <p className="text-default-900 mx-4">{aluminum.description}</p>
              <Button onClick={() => handleDelete(aluminum._id)}>
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

export default Aluminum;
