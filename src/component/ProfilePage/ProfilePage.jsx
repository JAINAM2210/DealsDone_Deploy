import React, { useState } from 'react';
import { styled, Container, Grid, Card, Typography, Button, Divider } from '@mui/material';

// Sample data for the profile and orders
const userProfile = {
  name: "Jane Smith",
  email: "jane.smith@example.com",
  phone: "(987) 654-3210",
  address: "456 Market Ave, City, Country",
  avatar: "https://www.w3schools.com/w3images/avatar2.png",
};

const orderHistory = [
  { id: 1, product: "Wireless Headphones", date: "2024-10-01", status: "Delivered", price: "$120.00" },
  { id: 2, product: "Smartwatch", date: "2024-09-15", status: "Shipped", price: "$200.00" },
  { id: 3, product: "Laptop Sleeve", date: "2024-08-30", status: "Pending", price: "$25.00" },
];

// Styled components using Material-UI's `styled` API
const ProfileContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#f7f7f7',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
}));

const ProfileCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
  },
}));

const AvatarImage = styled('img')({
  width: 100,
  height: 100,
  borderRadius: '50%',
  marginBottom: '16px',
  border: '3px solid #3f51b5',
});

const InfoText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const OrderCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  padding: theme.spacing(3),
  backgroundColor: '#fafafa',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
}));

const ProfilePage = () => {
  const [user] = useState(userProfile);
  const [orders] = useState(orderHistory);

  return (
    <ProfileContainer maxWidth="sm">
      <Grid container justifyContent="center">
        {/* Profile Section */}
        <Grid item xs={12} sm={10} md={8}>
          <ProfileCard>
            <AvatarImage src={user.avatar} alt="User Avatar" />
            <Typography variant="h5" component="h2">{user.name}</Typography>
            <InfoText variant="body2">{user.email}</InfoText>
            <InfoText variant="body2">{user.phone}</InfoText>
            <InfoText variant="body2">{user.address}</InfoText>
            <Button variant="contained" color="primary" sx={{ marginTop: 2, borderRadius: '20px' }}>
              Edit Profile
            </Button>
          </ProfileCard>
        </Grid>

        {/* Order History Section */}
        <Grid item xs={12} sm={10} md={8}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: 2, fontWeight: 600 }}>Order History</Typography>
          {orders.map((order) => (
            <OrderCard key={order.id}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="body1" fontWeight="bold">{order.product}</Typography>
                  <Typography variant="body2" color="textSecondary">Date: {order.date}</Typography>
                </Grid>
                <Grid item xs={4} container justifyContent="flex-end" direction="column" alignItems="flex-end">
                  <Typography variant="body1" color="textSecondary">{order.price}</Typography>
                  <Typography variant="body2" color={order.status === 'Delivered' ? 'green' : 'orange'}>{order.status}</Typography>
                </Grid>
              </Grid>
            </OrderCard>
          ))}
        </Grid>
      </Grid>
    </ProfileContainer>
  );
};

export default ProfilePage;
