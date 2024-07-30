 import {
  AttachFile,
  ChatBubbleTwoTone,
  Facebook,
  FiberManualRecord,
  Instagram,
  LayersTwoTone,
  LinkedIn,
  MoreVert,
  MoreVertTwoTone,
  NavigateNextRounded,
  PeopleAltTwoTone,
  PublicTwoTone,
  RecentActorsTwoTone,
  Reply,
  ThumbUp,
  ThumbUpTwoTone,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CardContent,
  Divider,
  Paper,
  Typography,
  Grid,
  Stack,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import avater from "./Assets/avater.png";
import post2 from "./Assets/post2.png"
import post3 from "./Assets/post3.jpg"
const Profilepage = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replies, setReplies] = useState({});

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleCommentClick = () => {
    setShowCommentBox(true);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, { text: commentText, likes: 0, id: Date.now(), replies: [] }]);
    setCommentText("");
    setShowCommentBox(false);
  };

  const handleLikeComment = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  const handleLikeReply = (commentId, replyId) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === replyId
                ? { ...reply, likes: reply.likes + 1 }
                : reply
            ),
          };
        }
        return comment;
      })
    );
  };

  const handleReplyChange = (commentId, event) => {
    setReplies({ ...replies, [commentId]: event.target.value });
  };

  const handleAddReply = (commentId) => {
    const newReplies = { ...replies, [commentId]: '' };
    setReplies(newReplies);
    const commentIndex = comments.findIndex((comment) => comment.id === commentId);
    const newComments = [...comments];
    newComments[commentIndex].replies = newComments[commentIndex].replies || [];
    newComments[commentIndex].replies.push({ text: replies[commentId], id: Date.now(), likes: 0 });
    setComments(newComments);
    setReplyingTo(null); 
  };

  return (
    <Grid container spacing={3} mt={'16px'} >
      <Grid item md={4} sm={12} xs={12} lg={4}>
        <Grid container spacing={2} direction={"column"}>
          <Grid item xs={12}>
            <Paper>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs="auto">
                    <Box
                      display={"flex"}
                      bgcolor={"rgba(30, 136, 229, 0.1)"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      borderRadius={"8px"}
                      padding={"8px"}
                    >
                      <PeopleAltTwoTone sx={{ color: "rgb(30, 136, 229)" }} />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography
                      variant="h3"
                      fontSize={"20px"}
                      color={"rgb(30, 136, 229)"}
                      marginBottom={"5px"}
                    >
                      239k
                    </Typography>
                    <Stack direction={"row"}>
                      <Typography variant="body2">Friends</Typography>
                      <pre style={{ margin: "0px " }}> </pre>
                    </Stack>
                  </Grid>
                  <Grid item xs="auto">
                    <Button>
                      <NavigateNextRounded />
                    </Button>
                  </Grid>
                </Grid>
                <Divider sx={{ marginBottom: "16px", marginTop: "16px" }} />
                <Grid container spacing={3}>
                  <Grid item xs="auto">
                    <Box
                      display={"flex"}
                      bgcolor={"rgba(94, 53, 177, 0.1)"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      borderRadius={"8px"}
                      padding={"8px"}
                    >
                      <RecentActorsTwoTone sx={{ color: "rgb(94, 53, 177)" }} />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography
                      variant="h3"
                      fontSize={"20px"}
                      color={"rgb(94, 53, 177)"}
                      marginBottom={"5px"}
                    >
                      234k
                    </Typography>
                    <Typography variant="body2">Followers</Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Button>
                      <NavigateNextRounded />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <CardContent>
                <Grid container spacing={2} direction={"column"}>
                  <Grid item>
                    <Typography variant="h3" fontSize={"16px"}>
                      About
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      fontSize={"12px"}
                      color="textSecondary"
                    >
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ marginTop: "16px", marginBottom: "16px" }} />
                <Grid container spacing={2} direction={"column"}>
                  <Grid item>
                    <a href="https://codedthemes.com">
                      <PublicTwoTone
                        sx={{
                          color: "rgb(103, 58, 183)",
                          marginRight: "8px",
                          verticalAlign: "bottom",
                        }}
                      />
                      https://codedthemes.com
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://www.instagram.com/codedthemes">
                      <Instagram
                        sx={{
                          color: "rgb(216, 67, 21)",
                          marginRight: "8px",
                          verticalAlign: "bottom",
                        }}
                      />
                      https://www.instagram.com/codedthemes
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://www.facebook.com/codedthemes">
                      <Facebook
                        sx={{
                          color: "rgb(33, 150, 243)",
                          marginRight: "8px",
                          verticalAlign: "bottom",
                        }}
                      />
                      https://www.facebook.com/codedthemes
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://in.linkedin.com/company/codedthemes">
                      <LinkedIn
                        sx={{
                          color: "rgb(18, 25, 38)",
                          marginRight: "8px",
                          verticalAlign: "bottom",
                        }}
                      />
                      https://in.linkedin.com/company/codedthemes
                    </a>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8} sm={12} xs={12} lg={8}>
        <Grid container spacing={3} direction={"column"}>
          <Grid item>
            <Paper>
              <CardContent>
                <Grid container spacing={3} direction={"column"}>
                  <Grid item>
                    <TextField
                      multiline
                      fullWidth
                      variant="outlined"
                      placeholder="What's on your mind, Larry?"
                      rows={4}
                    />
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justifyContent={"space-between"}
                      spacing={3}
                    >
                      <Grid item>
                        <Button
                          variant="outline"
                          sx={{ color: "rgb(103, 58, 183)" }}
                          startIcon={<AttachFile />}
                        >
                          Gallery
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "rgb(103, 58, 183)",
                            color: "rgb(255, 255, 255)",
                          }}
                          startIcon={<LayersTwoTone />}
                        >
                          Post
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <CardContent>
                <Grid container spacing={1} direction={"column"}>
                  <Grid item>
                    <Grid container justifyContent={"space-between"}>
                      <Grid item>
                        <Grid container spacing={2}>
                          <Grid item>
                            <Avatar src={avater} />
                          </Grid>
                          <Grid item>
                            <Grid container direction={"column"}>
                              <Grid item>
                                <Typography variant="h3" fontSize={"16px"}>
                                  Josephin water
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="body2"
                                  fontSize={"12px"}
                                  color="textSecondary"
                                >
                                  2 min ago
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <MoreVertTwoTone />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      fontSize={"14px"}
                      color="textSecondary"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Typography>
                  </Grid>
                 
                  <Grid item>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Grid container alignItems="center">
                          <Grid item>
                            <IconButton onClick={handleLikeClick}>
                              <ThumbUpTwoTone
                                color={isLiked ? "primary" : "inherit"}
                              />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">{likes}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button
                          startIcon={<ChatBubbleTwoTone />}
                          onClick={handleCommentClick}
                        >
                          Comment
                        </Button>
                      </Grid>
                      
                    </Grid>
                  </Grid>
                  {showCommentBox && (
                    <Grid item>
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Write a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "rgb(103, 58, 183)",
                              color: "rgb(255, 255, 255)",
                            }}
                            onClick={handleCommentSubmit}
                          >
                            Post
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                  {comments.length > 0 && (
                    <Grid item>
                      
                      <List>
                        {comments.map((comment) => (
                          <Paper  sx={{backgroundColor:"rgb(248, 250, 252)",mb:"16px"}}>
                          <ListItem key={comment.id} alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar src={avater} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="body1" >
                                  {comment.text}
                                </Typography>
                              }
                              secondary={
                                <React.Fragment>
                                  <Grid container alignItems="center">
                                    <Grid item>
                                      <IconButton
                                        onClick={() =>
                                          handleLikeComment(comment.id)
                                        }
                                      >
                                        <ThumbUp fontSize="small" />
                                      </IconButton>
                                    </Grid>
                                    <Grid item>
                                      <Typography
                                        variant="body2"
                                        color="textSecondary"
                                      >
                                        {comment.likes}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Button
                                        size="small"
                                        onClick={() =>
                                          setReplyingTo(
                                            replyingTo === comment.id
                                              ? null
                                              : comment.id
                                          )
                                        }
                                      >
                                        Reply
                                      </Button>
                                    </Grid>
                                  </Grid>
                                  {comment.replies.map((reply) => (
                                    <Grid
                                      container
                                      key={reply.id}
                                      alignItems="center"
                                      spacing={1}
                                      sx={{ marginLeft: "40px" }}
                                    >
                                      <Grid item>
                                        <Avatar
                                          src={avater}
                                          sx={{ width: 24, height: 24 }}
                                        />
                                      </Grid>
                                      <Grid item>
                                        <Typography variant="body2">
                                          {reply.text}
                                        </Typography>
                                      </Grid>
                                      <Grid item>
                                        <IconButton
                                          onClick={() =>
                                            handleLikeReply(comment.id, reply.id)
                                          }
                                        >
                                          <ThumbUp fontSize="small" />
                                        </IconButton>
                                      </Grid>
                                      <Grid item>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          {reply.likes}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                  {replyingTo === comment.id && (
                                    <Grid container spacing={2} sx={{ marginTop: "8px" }}>
                                      <Grid item xs={10}>
                                        <TextField
                                          fullWidth
                                          variant="outlined"
                                          placeholder="Write a reply..."
                                          value={replies[comment.id] || ""}
                                          onChange={(e) => handleReplyChange(comment.id, e)}
                                        />
                                      </Grid>
                                      <Grid item xs={2}>
                                        <Button
                                          variant="contained"
                                          sx={{
                                            backgroundColor: "rgb(103, 58, 183)",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                          onClick={() => handleAddReply(comment.id)}
                                        >
                                          Post
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  )}
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                          </Paper>
                        ))}
                      </List>
                      
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <CardContent>
                <Grid container spacing={1} direction={"column"}>
                  <Grid item>
                    <Grid container justifyContent={"space-between"}>
                      <Grid item>
                        <Grid container spacing={2}>
                          <Grid item>
                            <Avatar src={avater} />
                          </Grid>
                          <Grid item>
                            <Grid container direction={"column"}>
                              <Grid item>
                                <Typography variant="h3" fontSize={"16px"}>
                                  Josephin water
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="body2"
                                  fontSize={"12px"}
                                  color="textSecondary"
                                >
                                  2 min ago
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <MoreVertTwoTone />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      fontSize={"14px"}
                      color="textSecondary"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2}>
                  {/*img*/}    <Grid item>
                        <img
                          style={{
                            borderRadius: "10px",
                            width: "100%",
                            height: "auto",
                          }}
                          src={post2}
                          alt="Post"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Grid container alignItems="center">
                          <Grid item>
                            <IconButton onClick={handleLikeClick}>
                              <ThumbUpTwoTone
                                color={isLiked ? "primary" : "inherit"}
                              />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">{likes}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button
                          startIcon={<ChatBubbleTwoTone />}
                          onClick={handleCommentClick}
                        >
                          Comment
                        </Button>
                      </Grid>
                      
                    </Grid>
                  </Grid>
                  {showCommentBox && (
                    <Grid item>
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Write a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "rgb(103, 58, 183)",
                              color: "rgb(255, 255, 255)",
                            }}
                            onClick={handleCommentSubmit}
                          >
                            Post
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                  {comments.length > 0 && (
                    <Grid item>
                      
                      <List>
                        {comments.map((comment) => (
                          <Paper  sx={{backgroundColor:"rgb(248, 250, 252)",mb:"16px"}}>
                          <ListItem key={comment.id} alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar src={avater} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="body1" >
                                  {comment.text}
                                </Typography>
                              }
                              secondary={
                                <React.Fragment>
                                  <Grid container alignItems="center">
                                    <Grid item>
                                      <IconButton
                                        onClick={() =>
                                          handleLikeComment(comment.id)
                                        }
                                      >
                                        <ThumbUp fontSize="small" />
                                      </IconButton>
                                    </Grid>
                                    <Grid item>
                                      <Typography
                                        variant="body2"
                                        color="textSecondary"
                                      >
                                        {comment.likes}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Button
                                        size="small"
                                        onClick={() =>
                                          setReplyingTo(
                                            replyingTo === comment.id
                                              ? null
                                              : comment.id
                                          )
                                        }
                                      >
                                        Reply
                                      </Button>
                                    </Grid>
                                  </Grid>
                                  {comment.replies.map((reply) => (
                                    <Grid
                                      container
                                      key={reply.id}
                                      alignItems="center"
                                      spacing={1}
                                      sx={{ marginLeft: "40px" }}
                                    >
                                      <Grid item>
                                        <Avatar
                                          src={avater}
                                          sx={{ width: 24, height: 24 }}
                                        />
                                      </Grid>
                                      <Grid item>
                                        <Typography variant="body2">
                                          {reply.text}
                                        </Typography>
                                      </Grid>
                                      <Grid item>
                                        <IconButton
                                          onClick={() =>
                                            handleLikeReply(comment.id, reply.id)
                                          }
                                        >
                                          <ThumbUp fontSize="small" />
                                        </IconButton>
                                      </Grid>
                                      <Grid item>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          {reply.likes}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                  {replyingTo === comment.id && (
                                    <Grid container spacing={2} sx={{ marginTop: "8px" }}>
                                      <Grid item xs={10}>
                                        <TextField
                                          fullWidth
                                          variant="outlined"
                                          placeholder="Write a reply..."
                                          value={replies[comment.id] || ""}
                                          onChange={(e) => handleReplyChange(comment.id, e)}
                                        />
                                      </Grid>
                                      <Grid item xs={2}>
                                        <Button
                                          variant="contained"
                                          sx={{
                                            backgroundColor: "rgb(103, 58, 183)",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                          onClick={() => handleAddReply(comment.id)}
                                        >
                                          Post
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  )}
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                          </Paper>
                        ))}
                      </List>
                      
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Paper>
          </Grid>
          <Grid item>
  <Paper>
    <CardContent>
      <Grid container spacing={1} direction={"column"}>
        <Grid item>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar src={avater} />
                </Grid>
                <Grid item>
                  <Grid container direction={"column"}>
                    <Grid item>
                      <Typography variant="h3" fontSize={"16px"}>
                        Jane Doe
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        fontSize={"12px"}
                        color="textSecondary"
                      >
                        5 min ago
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <MoreVertTwoTone />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            fontSize={"14px"}
            color="textSecondary"
          >
            Check out this awesome video!
          </Typography>
        </Grid>
        <Grid item>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=vyJU9efvUtQ&t=917s"
            width="100%"
          />
        </Grid>
        <Grid item>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Grid container alignItems="center">
                          <Grid item>
                            <IconButton onClick={handleLikeClick}>
                              <ThumbUpTwoTone
                                color={isLiked ? "primary" : "inherit"}
                              />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">{likes}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button
                          startIcon={<ChatBubbleTwoTone />}
                          onClick={handleCommentClick}
                        >
                          Comment
                        </Button>
                      </Grid>
                      
                    </Grid>
                  </Grid>
                  {showCommentBox && (
                    <Grid item>
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Write a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "rgb(103, 58, 183)",
                              color: "rgb(255, 255, 255)",
                            }}
                            onClick={handleCommentSubmit}
                          >
                            Post
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                  {comments.length > 0 && (
                    <Grid item>
                      
                      <List>
                        {comments.map((comment) => (
                          <Paper  sx={{backgroundColor:"rgb(248, 250, 252)",mb:"16px"}}>
                          <ListItem key={comment.id} alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar src={avater} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="body1" >
                                  {comment.text}
                                </Typography>
                              }
                              secondary={
                                <React.Fragment>
                                  <Grid container alignItems="center">
                                    <Grid item>
                                      <IconButton
                                        onClick={() =>
                                          handleLikeComment(comment.id)
                                        }
                                      >
                                        <ThumbUp fontSize="small" />
                                      </IconButton>
                                    </Grid>
                                    <Grid item>
                                      <Typography
                                        variant="body2"
                                        color="textSecondary"
                                      >
                                        {comment.likes}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Button
                                        size="small"
                                        onClick={() =>
                                          setReplyingTo(
                                            replyingTo === comment.id
                                              ? null
                                              : comment.id
                                          )
                                        }
                                      >
                                        Reply
                                      </Button>
                                    </Grid>
                                  </Grid>
                                  {comment.replies.map((reply) => (
                                    <Grid
                                      container
                                      key={reply.id}
                                      alignItems="center"
                                      spacing={1}
                                      sx={{ marginLeft: "40px" }}
                                    >
                                      <Grid item>
                                        <Avatar
                                          src={avater}
                                          sx={{ width: 24, height: 24 }}
                                        />
                                      </Grid>
                                      <Grid item>
                                        <Typography variant="body2">
                                          {reply.text}
                                        </Typography>
                                      </Grid>
                                      <Grid item>
                                        <IconButton
                                          onClick={() =>
                                            handleLikeReply(comment.id, reply.id)
                                          }
                                        >
                                          <ThumbUp fontSize="small" />
                                        </IconButton>
                                      </Grid>
                                      <Grid item>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          {reply.likes}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                  {replyingTo === comment.id && (
                                    <Grid container spacing={2} sx={{ marginTop: "8px" }}>
                                      <Grid item xs={10}>
                                        <TextField
                                          fullWidth
                                          variant="outlined"
                                          placeholder="Write a reply..."
                                          value={replies[comment.id] || ""}
                                          onChange={(e) => handleReplyChange(comment.id, e)}
                                        />
                                      </Grid>
                                      <Grid item xs={2}>
                                        <Button
                                          variant="contained"
                                          sx={{
                                            backgroundColor: "rgb(103, 58, 183)",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                          onClick={() => handleAddReply(comment.id)}
                                        >
                                          Post
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  )}
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                          </Paper>
                        ))}
                      </List>
                      
                    </Grid>
                  )}
      </Grid>
    </CardContent>
  </Paper>
</Grid>
<Grid item>
            <Paper>
              <CardContent>
                <Grid container spacing={1} direction={"column"}>
                  <Grid item>
                    <Grid container justifyContent={"space-between"}>
                      <Grid item>
                        <Grid container spacing={2}>
                          <Grid item>
                            <Avatar src={avater} />
                          </Grid>
                          <Grid item>
                            <Grid container direction={"column"}>
                              <Grid item>
                                <Typography variant="h3" fontSize={"16px"}>
                                  Josephin water
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="body2"
                                  fontSize={"12px"}
                                  color="textSecondary"
                                >
                                  2 min ago
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <MoreVertTwoTone />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      fontSize={"14px"}
                      color="textSecondary"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Typography>
                  </Grid>
                  <Grid item>
  <Grid container spacing={2} direction={"row"} style={{ height: "300px" }}>
    {/* Image 1 */}
    <Grid item lg={6} md={6} xs={6}>
      <img
        style={{
          borderRadius: "10px",
          width: '100%',
          height: 'auto',

          objectFit: "contain"
        }}
        src={post2}
        alt="Post"
      />
    </Grid>
    {/* Image 2 */}
    <Grid item lg={6} md={6} xs={6}>
    <img
        style={{
          borderRadius: "10px",
          width: '100%',
          height: 'auto',

          objectFit: "contain"
        }}
        src={post3}
        alt="Post"
      />
    </Grid>
  </Grid>
</Grid>

                  <Grid item>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Grid container alignItems="center">
                          <Grid item>
                            <IconButton onClick={handleLikeClick}>
                              <ThumbUpTwoTone
                                color={isLiked ? "primary" : "inherit"}
                              />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2">{likes}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button
                          startIcon={<ChatBubbleTwoTone />}
                          onClick={handleCommentClick}
                        >
                          Comment
                        </Button>
                      </Grid>
                      
                    </Grid>
                  </Grid>
                  {showCommentBox && (
                    <Grid item>
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Write a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "rgb(103, 58, 183)",
                              color: "rgb(255, 255, 255)",
                            }}
                            onClick={handleCommentSubmit}
                          >
                            Post
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                  {comments.length > 0 && (
                    <Grid item>
                      
                      <List>
                        {comments.map((comment) => (
                          <Paper  sx={{backgroundColor:"rgb(248, 250, 252)",mb:"16px"}}>
                          <ListItem key={comment.id} alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar src={avater} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="body1" >
                                  {comment.text}
                                </Typography>
                              }
                              secondary={
                                <React.Fragment>
                                  <Grid container alignItems="center">
                                    <Grid item>
                                      <IconButton
                                        onClick={() =>
                                          handleLikeComment(comment.id)
                                        }
                                      >
                                        <ThumbUp fontSize="small" />
                                      </IconButton>
                                    </Grid>
                                    <Grid item>
                                      <Typography
                                        variant="body2"
                                        color="textSecondary"
                                      >
                                        {comment.likes}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Button
                                        size="small"
                                        onClick={() =>
                                          setReplyingTo(
                                            replyingTo === comment.id
                                              ? null
                                              : comment.id
                                          )
                                        }
                                      >
                                        Reply
                                      </Button>
                                    </Grid>
                                  </Grid>
                                  {comment.replies.map((reply) => (
                                    <Grid
                                      container
                                      key={reply.id}
                                      alignItems="center"
                                      spacing={1}
                                      sx={{ marginLeft: "40px" }}
                                    >
                                      <Grid item>
                                        <Avatar
                                          src={avater}
                                          sx={{ width: 24, height: 24 }}
                                        />
                                      </Grid>
                                      <Grid item>
                                        <Typography variant="body2">
                                          {reply.text}
                                        </Typography>
                                      </Grid>
                                      <Grid item>
                                        <IconButton
                                          onClick={() =>
                                            handleLikeReply(comment.id, reply.id)
                                          }
                                        >
                                          <ThumbUp fontSize="small" />
                                        </IconButton>
                                      </Grid>
                                      <Grid item>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          {reply.likes}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                  {replyingTo === comment.id && (
                                    <Grid container spacing={2} sx={{ marginTop: "8px" }}>
                                      <Grid item xs={10}>
                                        <TextField
                                          fullWidth
                                          variant="outlined"
                                          placeholder="Write a reply..."
                                          value={replies[comment.id] || ""}
                                          onChange={(e) => handleReplyChange(comment.id, e)}
                                        />
                                      </Grid>
                                      <Grid item xs={2}>
                                        <Button
                                          variant="contained"
                                          sx={{
                                            backgroundColor: "rgb(103, 58, 183)",
                                            color: "rgb(255, 255, 255)",
                                          }}
                                          onClick={() => handleAddReply(comment.id)}
                                        >
                                          Post
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  )}
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                          </Paper>
                        ))}
                      </List>
                      
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Paper>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
   
  );
};

export default Profilepage;
