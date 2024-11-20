import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Grid } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { addProduct } from "../../../service/api";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: '',
    url: '',
    detailUrl: '',
    title: {
      shortTitle: '',
      longTitle: '',
    },
    price: {
      mrp: '',
      cost: '',
      discount: '',
    },
    quantity: '',
    description: '',
    discount: '',
    tagline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProduct((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Product details submitted:', product);

    const response = await addProduct(product);
    
    if (!response) return;
    navigate('./');
  
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Add a New Product
      </Typography>

      <Paper elevation={4} sx={{ padding: 3, maxWidth: 700, margin: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Product ID"
                name="id"
                fullWidth
                variant="outlined"
                value={product.id}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Image URL"
                name="url"
                fullWidth
                variant="outlined"
                value={product.url}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Detail Image URL"
                name="detailUrl"
                fullWidth
                variant="outlined"
                value={product.detailUrl}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Short Title"
                name="title.shortTitle"
                fullWidth
                variant="outlined"
                value={product.title.shortTitle}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Long Title"
                name="title.longTitle"
                fullWidth
                variant="outlined"
                value={product.title.longTitle}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="MRP"
                name="price.mrp"
                type="number"
                fullWidth
                variant="outlined"
                value={product.price.mrp}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Cost"
                name="price.cost"
                type="number"
                fullWidth
                variant="outlined"
                value={product.price.cost}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Discount"
                name="price.discount"
                type="text"
                fullWidth
                variant="outlined"
                value={product.price.discount}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Quantity"
                name="quantity"
                type="number"
                fullWidth
                variant="outlined"
                value={product.quantity}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                value={product.description}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Discount Tag"
                name="discount"
                fullWidth
                variant="outlined"
                value={product.discount}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Tagline"
                name="tagline"
                fullWidth
                variant="outlined"
                value={product.tagline}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<AddPhotoAlternateIcon />}
            >
              Add Product
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AddProduct;
