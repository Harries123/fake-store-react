// Add.jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  const [product, setProduct] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: {
      rate: '',
      count: ''
    },
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;

   
    if (name.startsWith('rating.')) {
      const ratingField = name.split('.')[1];
      setProduct((prevProduct) => ({
        ...prevProduct,
        rating: {
          ...prevProduct.rating,
          [ratingField]: value,
        },
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    
    const formattedProduct = {
      ...product,
      id: Number(product.id),
      price: parseFloat(product.price),
      rating: {
        rate: parseFloat(product.rating.rate),
        count: Number(product.rating.count),
      },
    };
    console.log(formattedProduct);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        label="ID"
        name="id"
        value={product.id}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Title"
        name="title"
        value={product.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        name="price"
        value={product.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={product.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Category"
        name="category"
        value={product.category}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Image URL"
        name="image"
        value={product.image}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Rating (Rate)"
        name="rating.rate"
        value={product.rating.rate}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Rating (Count)"
        name="rating.count"
        value={product.rating.count}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default Add;
