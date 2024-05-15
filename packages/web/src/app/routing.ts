export const ROUTES = {
  home: "/",
  login: "/login",
  about: "/about",
  course: (courseId: string) => `/courses/${courseId}`,
};
