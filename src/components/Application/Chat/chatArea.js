import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Button, Avatar } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import InfoIcon from '@mui/icons-material/Info';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChatArea = ({ selectedUser }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hi! Good Morning!', sender: 'them' },
    { text: 'Good. Thank you', sender: 'me' },
    { text: 'I need your minute, are you available?', sender: 'them' },
  ]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'me' }]);
      setMessage('');
    }
  };

  const handleEmojiClick = (event, emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #ccc' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={selectedUser.avatar} alt={selectedUser.name} />
          <Typography variant="h6" ml={2}>{selectedUser.name}</Typography>
        </Box>
        <Box>
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <VideocamIcon />
          </IconButton>
          <IconButton>
            <InfoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
        {messages.map((msg, index) => (
          <Box key={index} sx={{ my: 1, alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start' }}>
            <Typography variant="body1" sx={{ bgcolor: msg.sender === 'me' ? 'primary.light' : 'grey.300', p: 1, borderRadius: 1 }}>
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowEmojiPicker((val) => !val)}>
                <EmojiEmotionsIcon />
              </IconButton>
            ),
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </Button>
      </Box>
      {showEmojiPicker && (
        <Box sx={{ position: 'absolute', bottom: 60, right: 20 }}>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </Box>
      )}
    </Box>
  );
};

export default ChatArea;
