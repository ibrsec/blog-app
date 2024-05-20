import { Box, Button } from "@mui/material";
import ModalComp from "./ModalComp";
import { useState } from "react";
import DeleteBlogComp from "./DeleteBlogComp";
import UpdateBlogComp from "./UpdateBlogComp";

const BlogEditButtons = () => {
    const [open, setOpen] = useState(false);
    const [willMount,setWillMount] = useState();

    const handleUpdate = () => {
        setOpen(true)
        setWillMount(<UpdateBlogComp setOpen={setOpen} />)
    }
    const handleDelete = () => {
        setOpen(true)
        setWillMount(<DeleteBlogComp setOpen={setOpen}/>)
    }
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2}>
      <Button variant="contained" onClick={handleUpdate}>Update Blog</Button>
      <Button variant="contained" onClick={handleDelete}>Delete Blog</Button>

      <ModalComp open={open} setOpen={setOpen} willMount={willMount}/>
    </Box>
  );
};

export default BlogEditButtons;
