import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/conf";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function postform({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defalutValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const sumbit = (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFile(data.image[0])
        : null;
    }
    if (file) {
      appwriteService.deleteFile(post.featuredImage);
    }
  };
  return <div>postform</div>;
}

export default postform;
