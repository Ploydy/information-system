import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import aluminum from '../../../Gallery/Products/aluminum.jpg'
import glass from '../../../Gallery/Products/glass.jpg'

const ProductCard = () => {
  const list = [
    {
      title: 'Aluminum',
      img: aluminum,
      price: '$5.50',
    },
    {
      title: 'Glass',
      img: glass,
      price: '$3.00',
    },
    {
      title: 'Aluminum 5 X 7',
      img: '/images/fruit-3.jpeg',
      price: '$10.00',
    },
    {
      title: 'Glass 6 X 9',
      img: '/images/fruit-4.jpeg',
      price: '$5.30',
    },
    
  ];
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
        className=''
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log('Modal (add to cart or nah)')}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src = {item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
};

export default ProductCard;
