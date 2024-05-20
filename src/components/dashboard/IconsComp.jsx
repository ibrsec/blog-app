import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toastInfo } from "../../helper/ToastNotify";
import useBlogApis from "../../hooks/useBlogApis";
import { useEffect, useState } from "react";

const IconsComp = ({
  likes,
  comments,
  countOfVisitors,
  _id,
  handleCommentClick,
}) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const { postLikeApi } = useBlogApis();
  const currentUser = useSelector((state) => state.auth.user);

  const [didUserLike, setDidUserLike] = useState(null);
  const [countOfLikes, setCountOfLikes] = useState(null);
  const singleLikeResult = useSelector((state) => state.blogs.singleLikeResult);

  useEffect(() => {
    singleLikeResult?.id === _id &&
      setDidUserLike(singleLikeResult?.data?.didUserLike);
    singleLikeResult?.id === _id &&
      setCountOfLikes(singleLikeResult?.data?.countOfLikes);
  }, [singleLikeResult]);

  
  const likeHandle = () => {
    if (token) {
      console.log("like happens");
      postLikeApi(_id);
    } else {
      navigate("/login");
      toastInfo("You must login first!!");
    }
  };

  return (
    <Box display={"flex"} alignItems={"center"} gap={1}>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1}
        component="button"
        variant="text"
        sx={{
          cursor: "pointer",
          backgroundColor: "transparent",
          borderRadius: "50%",
          p: "5px",
          border: "none",
          transition: ".5s all",
          ":hover": { backgroundColor: "rgba(1,1,1,.1)" },
          ":active": { backgroundColor: "rgba(1,1,1,.2)" },
        }}
        onClick={likeHandle}
      >
        <FavoriteIcon sx={{ 
          color: didUserLike !== null ? (didUserLike ? 'red' : "black") : (likes?.some((item) => item === currentUser?._id) ? "red" : "black")}} />{" "}
        {countOfLikes!== null ? countOfLikes : likes?.length}
      </Box>
      {/* likes?.some((item) => item === currentUser?._id ? "red" : "black" */}

      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1}
        sx={{
          cursor: "pointer",
          backgroundColor: "transparent",
          borderRadius: "50%",
          p: "5px",
          border: "none",
          transition: ".5s all",
          ":hover": { backgroundColor: "rgba(1,1,1,.1)" },
          ":active": { backgroundColor: "rgba(1,1,1,.2)" },
        }}
        onClick={handleCommentClick}
      >
        <MessageIcon /> {comments?.length}
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1}
        sx={{
          cursor: "pointer",
          backgroundColor: "transparent",
          borderRadius: "50%",
          p: "5px",
          border: "none",
          transition: ".5s all",
          ":hover": { backgroundColor: "rgba(1,1,1,.1)" },
          ":active": { backgroundColor: "rgba(1,1,1,.2)" },
        }}
      >
        <VisibilityIcon /> {countOfVisitors}
      </Box>
    </Box>
  );
};

export default IconsComp;
