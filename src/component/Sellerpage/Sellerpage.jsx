import React, { useContext, useState } from 'react';
import {Button, Typography, Box, Card, CardContent, Grid, styled } from '@mui/material';
import Header from './sellerheader/sellerheader';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './SellerPage.css';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import LoginDialog from '../login/LoginDialog';

function SellerPage() {
  const navigate = useNavigate();
  const { account } = useContext(DataContext); // Access the account context
  const [open, setOpen] = useState(false); // Manage login dialog state

  const handleAddProduct = () => {
    if (account) {
      // Navigate to the Add Product page if the seller is logged in
      navigate('/add-product');
    } else {
      // Open the login dialog if the seller is not logged in
      setOpen(true);
    }
  };

  const DealText = styled(Typography)`
    font-size: 48px;
    font-weight: 500;
    line-height: 32px;
    margin-right: auto ;
    margin-left: auto ;
    margin-bottom: 40px;
    margin-top: 40px;
    color: orange;
    text-align: center;
`

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <Box className="hero-section" sx={{ textAlign: 'center', padding: 5, backgroundColor: '#f5f5f5' }}>
      <DealText>
                    <span style={{ color: '#FFA500' }}>Start</span>{' '}
                    <span style={{ color: '#051922' }}>Selling Online with Ease</span>
            </DealText>
        <Typography variant="h6" color="text.secondary" paragraph>
          Reach millions of customers and grow your business with our platform.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddCircleIcon />}
          onClick={handleAddProduct}
          style={{ backgroundColor: '#FFA500', color: 'white' }}
        >
          Add Product
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ padding: 5 }}>
        <Typography variant="h4" textAlign="center" gutterBottom style={{ color: '#051922' }}>
          Why Sell with Us?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card" >
              <CardContent>
                <ShoppingCartIcon style={{ color: '#FFA500' }} sx={{ fontSize: 50 }} />
                <Typography variant="h6" gutterBottom style={{ color: '#051922' }}>
                  45 Crore+ Customers
                </Typography>
                <Typography color="text.secondary" >
                  Connect with millions of customers nationwide to boost your sales.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
              <CardContent>
                <EnhancedEncryptionIcon style={{ color: '#FFA500' }} sx={{ fontSize: 50 }} />
                <Typography variant="h6" gutterBottom style={{ color: '#051922' }}>
                  Secure Payments
                </Typography>
                <Typography color="text.secondary">
                  Receive secure and timely payments every week without any hassle.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="feature-card">
              <CardContent>
                <SupportAgentIcon style={{ color: '#FFA500' }} sx={{ fontSize: 50 }} />
                <Typography variant="h6" gutterBottom style={{ color: '#051922' }}>
                  Seller Support
                </Typography>
                <Typography color="text.secondary" >
                  Access 24/7 seller support to help you through any challenges.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box style={{ backgroundColor: '#051922', padding: 20, textAlign: 'center', color: 'white', marginTop: 95 }}>
        <Typography variant="body1">© 2024 DealsDone | All rights reserved.</Typography>
      </Box>

      {/* Login Dialog */}
      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default SellerPage;
