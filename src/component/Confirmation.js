import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Confirmation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Order Confirmation</h2>
      <p style={styles.message}>Thank you for your purchase! Your order has been successfully processed.</p>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        style={styles.button}
      >
        Go to Home
      </Button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    color: '#E91E63',
    marginBottom: '16px',
  },
  message: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#E91E63',
    color: '#fff',
  },
};

export default Confirmation;
