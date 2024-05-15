"use client";
import { useEffect, useState } from "react";
import { ROUTES } from "../../routing";
import { AppLink } from "../../shared/app-link/appLink";

type CoursePreviewType = {
  id: string;
  title: string;
};

const getLikeKey = (courseId: string) => `course_like_key_${courseId}`;

export const CoursePreview = ({ id, title }: CoursePreviewType) => {
  const likeKey = getLikeKey(id);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedValue = localStorage.getItem(likeKey);
    setLiked(likedValue === "yes");
  }, [id, likeKey]);

  const like = () => {
    setLiked(!liked);
    localStorage.setItem(likeKey, !liked ? "yes" : "no");
  };

  return (
    <>
      <AppLink href={ROUTES.course(id)}>{title}</AppLink>
      <button type="button" onClick={like}>
        {liked ? "👍" : "Like"}
      </button>
    </>
  );
};
