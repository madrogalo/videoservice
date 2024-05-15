import { getCourseById } from "@/app/(server)/api";
import React from "react";

export const CoursePage = async ({ params }: Params) => {
  const { courseId } = params;
  const course = await getCourseById(courseId);
  return (
    <>
      <h2>Video Course</h2>
      <br />
      <h3>{course.title}</h3>
      <p>{course.excerpt}</p>
      <p>{course.body}</p>
    </>
  );
};

export default CoursePage;
