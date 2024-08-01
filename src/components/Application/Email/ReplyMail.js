// ReplyMail.js
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const ReplyMail = ({ mail, handleClose }) => {
  const [reply, setReply] = useState("");

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleSendReply = () => {
    console.log(`Reply to ${mail.subject}: ${reply}`);
    handleClose();
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={reply}
        onChange={handleReplyChange}
        placeholder="Write your reply..."
      />
      <Button onClick={handleSendReply} sx={{ marginTop: 1 }}>Send</Button>
    </Box>
  );
};

export default ReplyMail;
