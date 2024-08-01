import React from 'react';
import { Paper, Typography, Button, Divider, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MailDetail = ({ mail, handleReply, handleBack }) => {
  return (
    <Paper elevation={2}style={{ padding: '16px' }}>
      <IconButton onClick={handleBack}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h6">{mail.subject}</Typography>
      <Typography variant="subtitle1">From: {mail.sender}</Typography>
      <Typography variant="body1">{mail.body}</Typography>
      <Divider style={{ margin: '16px 0' }} />
      <Button variant="contained" color="primary" onClick={() => handleReply(mail)}>Reply</Button>
    </Paper>
  );
};

export default MailDetail;
