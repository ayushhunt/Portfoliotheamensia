import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Box, Popover, Typography } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    paymentRefId: ''
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would replace 'YOUR_WEB_APP_URL' with the URL of your deployed Apps Script
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyozdR-yNQ25bF8IAMvJ3QfkF7EGFgVgMbyoG_nzj4K-zp0qq_m3t4_2D5DXknOmhsY3g/exec';

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Assuming the fetch succeeds, handle the response how you wish.
      // For example, reset form state, show a success message, etc.
      setFormData({
        name: '',
        phone: '',
        paymentRefId: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleQrClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="md">
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Payment Reference ID"
              name="paymentRefId"
              value={formData.paymentRefId}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button
              aria-describedby={id}
              variant="contained"
              color="secondary"
              onClick={handleQrClick}
              startIcon={<QrCodeIcon />}
              sx={{ ml: 2 }}
            >
              Show QR
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <img src="/dish.jpg" alt="QR Code"  style={{ maxWidth: '200px', maxHeight: '200px' }}/>
              </Typography>
            </Popover>
          </Grid>
        </Grid>
        <br/>
      </Box>
    </Container>
  );
};

export default FormComponent;
