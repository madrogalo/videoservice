import { ERRORS } from "../errors";
import courses from "./db.json";
import { delayed } from "./delay";

export function getAllCourses() {
  return delayed(courses, { timeout: 1500, shouldFail: false });
}
export function getCourseById(courseId: string) {
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    throw new Error(ERRORS.NOT_FOUND);
  }

  return delayed(course, { timeout: 1000, shouldFail: false });
}
