export const ROUTES = {
  home: "/",
  signin: "/signin",
  login: "/login",
  about: "/about",
  course: (courseId: string) => `/courses/${courseId}`,
};
