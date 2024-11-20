import React from "react";
import { Container, Typography, Grid, Box, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container maxWidth="lg" className="about-us">
      {/* Header Section */}
      <Box textAlign="center" mb={4} className="about-header">
        <Typography variant="h3" gutterBottom className="highlight">
          Welcome to <span>DealsDone</span>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Discover the perfect place for buyers and sellers to thrive!
        </Typography>
      </Box>

      {/* Who We Are Section */}
      <Grid container spacing={4} className="about-section">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Who We Are
          </Typography>
          <Typography variant="body1" color="textSecondary">
            At <b>DealsDone</b>, we aim to create a seamless shopping
            experience for buyers and sellers alike. Our platform showcases a
            diverse range of products sourced from passionate sellers who value
            quality and customer satisfaction.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://media.licdn.com/dms/image/D4D12AQFjY_qoFYh7RQ/article-cover_image-shrink_720_1280/0/1696425320324?e=2147483647&v=beta&t=-NsmL_VB5IKNExWIMU4E5BLKLQjHTSsuo1yV4pC7Eto"
            alt="Who We Are"
            className="about-image"
          />
        </Grid>
      </Grid>

      {/* What We Offer Section */}
      <Box mb={6} className="about-section">
        <Typography variant="h4" gutterBottom>
          What We Offer
        </Typography>
        <Grid container spacing={4}>
          {[ 
            {
              title: "Diverse Products",
              description: "Browse a wide range of items to suit your needs.",
              image: "https://geti.id/wp-content/uploads/2023/08/1684731929210-1.png",
            },
            {
              title: "Secure Shopping",
              description: "Enjoy a safe shopping experience with reliable payment methods.",
              image: "https://wpactivethemes.com/wp-content/uploads/2022/09/Why-is-multi-vendor-marketplace-solution-the-best-idea-for-eCommerce-business.png",
            },
            {
              title: "Exceptional Support",
              description: "We're here to help you every step of the way.",
              image: "https://www.agilitypr.com/wp-content/uploads/2021/05/reviews.jpg",
            },
          ].map((offer, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="offer-card">
                <Box
                  component="img"
                  src={offer.image}
                  alt={offer.title}
                  className="offer-image"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {offer.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {offer.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Why Choose Us Section */}
      <Box textAlign="center" className="about-section">
        <Typography variant="h4" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          We're committed to providing the best experience for buyers and sellers.
        </Typography>
        <Grid container spacing={4}>
          {[ 
            "Verified Sellers",
            "Community-Driven",
            "Modern Platform",
            "Customer Focused",
          ].map((reason, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Typography variant="body1" fontWeight="bold" className="reason">
                {reason}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQs Section */}
      <Box mt={6} className="about-section">
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq1-content"
            id="faq1-header"
          >
            <Typography variant="h6">What is DealsDone?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              DealsDone is an online marketplace that connects buyers and sellers, providing a seamless and secure shopping experience.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq2-content"
            id="faq2-header"
          >
            <Typography variant="h6">How do I become a seller on DealsDone?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To become a seller, sign up on our platform, get verified, and start listing your products to reach a wider audience.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq3-content"
            id="faq3-header"
          >
            <Typography variant="h6">How can I make a purchase?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Simply browse through the products, add them to your cart, and proceed to checkout to complete the purchase with a secure payment method.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq4-content"
            id="faq4-header"
          >
            <Typography variant="h6">Is my personal information secure?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we use secure encryption methods to protect your personal and payment details to ensure your safety while shopping on DealsDone.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default AboutUs;
