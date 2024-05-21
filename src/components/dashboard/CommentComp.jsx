 
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography"; 
import { useState } from "react";
import { useSelector } from "react-redux";
import useBlogApis from "../../hooks/useBlogApis";
import DeleteCommentComp from "./DeleteCommentComp";
import ModalComp from "./ModalComp";

const CommentComp = () => {
  const currentUser = useSelector(state=>state.auth.user);
  const singleBlogInfo = useSelector((state) => state.blogs.singleBlog);
  const [commentInput, setCommentInput] = useState("");
  const { postNewDatageneric  } = useBlogApis();

  const handleCommentSubmit = (e) => {
    e.preventDefault(); 
    setCommentInput("");
    const commentBody = {
      blogId: singleBlogInfo?._id,
      comment: commentInput,
    };
    postNewDatageneric("comments", commentBody);
  };

  //delete comment part
  const [open, setOpen] = useState(false);
  const [willMount, setWillMount] = useState();

  const handleDeleteComment = (id) => {
      setOpen(true)
      setWillMount(<DeleteCommentComp setOpen={setOpen} commentId={id} />)
  }

  return (
    <Box mt={3}>
      <hr />
      <Typography variant="h4" mt={3} mb={3} align="center" fontWeight={"bold"}>
        Comments
      </Typography>
      <Box mb={4}>
        {singleBlogInfo?.comments.map((comment) => (
          <Box
            key={comment?._id}
            display={"flex"}
            alignItems={"start"}
            gap={2}
            mb={2} 


          >
            <Avatar sx={{ color: "blueviolet", backgroundColor: "skyblue" }} />
            <Box
              display={"flex"}
              flexDirection={"column"}
              // alignItems={"start"}
              justifyContent={"center"}
              gap={0.7} 
              flexGrow={1}
              

            >
              <Typography fontWeight={"bold"}>
                {comment?.userId?.username}
              </Typography>
              <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Typography color={"gray"}>
                  {new Date(comment?.createdAt).toLocaleString("en-EN")}
                </Typography>

                {
                 currentUser?._id === singleBlogInfo?.userId?._id && <Button variant="contained" size="small" onClick={()=>handleDeleteComment(comment?._id)}>Delete Comment</Button>
                }


                
              </Box>
              <Typography>{comment?.comment}</Typography>
            </Box>
          </Box>
        ))}
        
      </Box>
      <Box component={"form"} onSubmit={handleCommentSubmit}>
        <TextField
          required
          fullWidth
          type="text"
          label="Comment"
          id="comment"
          multiline
          rows={3}
          name="commentInput"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: "1rem" }}
          fullWidth
        >
          ADD COMMENT
        </Button>
      </Box>
      <ModalComp open={open} setOpen={setOpen} willMount={willMount}/>
    </Box>
  );
};

export default CommentComp;
