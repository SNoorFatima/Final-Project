import React, { useState, useRef } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.png';
import { Stack } from '@mui/system';

const VerificationCodePage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    // Automatically move to the next input
    if (e.target.value !== '' && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleContinue = () => {
    // Logic to verify the code
    console.log('Verification code:', code.join(''));
    navigate('/reset-password'); // Redirect to your reset password page
  };

  const handleResendCode = () => {
    // Logic to resend the code
    console.log('Resend code');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Box display="flex" flexDirection="column">
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant="h3" fontSize={'20px'} fontWeight={600} color={'rgb(103, 58, 183)'}>
                Verification Code
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logo}
                  alt="Berry Logo"
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  BERRY
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body2" fontWeight={600}  color={"rgb(54, 65, 82)"} >
              We send you on mail.
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2} align='center'>
            We sent you a code on jone.****@company.com
            </Typography>
          </Box>
          <Box mt={3} display="flex" justifyContent="space-between">
            {code.map((value, index) => (
              <TextField
                key={index}
                inputRef={(el) => (inputRefs.current[index] = el)}
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyPress(e, index)}
                variant="outlined"
                margin="normal"
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: 'center' },
                }}
                sx={{ width: '60px', marginRight: index < 3 ? '10px' : '0' }}
              />
            ))}
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleContinue}
            style={{ marginTop: '20px', backgroundColor: '#6a1b9a' }}
          >
            Continue
          </Button>
          <Box mt={2} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body2" fontWeight={550} >
              Did not receive the email? Check your spam filter, or
            </Typography>
            <Button
            fullWidth
            variant="outlined"
            
            onClick={handleResendCode}
            style={{ marginTop: '20px',color:"#6a1b9a", borderColor: '#6a1b9a' }}
          >
             Resend code
          </Button>
            
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VerificationCodePage;
