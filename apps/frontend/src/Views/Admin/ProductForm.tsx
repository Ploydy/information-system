import { Button, Card, Input } from '@nextui-org/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { CreateProductDto, UpdateProductDto } from '@information-system/mylib';
import { ProductRequest, ProductResponse } from '@information-system/mylib';

 

const ProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<ProductResponse>();

  const handleSave = async (product: ProductResponse) => {
    const request: ProductRequest = {
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
    };
     try {
      if (id) {
        await axios.put<UpdateProductDto>(`http://localhost:4200/api/products/${id}`, request)
      } else {
        await axios.post<CreateProductDto>('http://localhost:4200/api/products/new', request)
      }
      navigate('/admin/products')
     } catch (error) {
      console.log(error)
     }
   
  };

  // getting data
  useEffect(() => {
    axios
      .get<ProductRequest>('http://localhost:4200/api/products/' + id)
      .then(res => {
        setValue('title', res.data.title);
        setValue('description', res.data.description);
        setValue('price', res.data.price);
        setValue('category', res.data.category);
      })
      .catch(err => console.log(err));
  }, [id, setValue]);

  return(
    <div className="container card">
      <div className="form-title text-center">
        <h2 className="text-dark">{!id ? 'New' : 'Update'} Product</h2>
        <span className="">
          Use the below form to {!id ? 'create a new' : 'update a'} product
        </span>

        <form method="POST">
          <div className="my-10 ">
            <Card className="max-w-md px-5 pt-5 ">
              <Input
                placeholder="Title"
                type="text"
                {...register('title')}
              />

              <Input placeholder="Description" type="text" {...register('description')} />

              <Input placeholder="Price" type="text" {...register('price')} />

              <Input
                placeholder="Category"
                type="number"
                {...register('category')}
              />

              <Button
                className="my-4 rounded-xl bg-slate-600 text-slate-50 "
                onClick={handleSubmit(handleSave)}
              >
                {!id ? 'Add' : 'Update'} Product
              </Button>
            </Card>
          </div>
        </form>
      </div>
    </div>
  )
};

export default ProductForm;


