export const ROUTES = {
  home: "/",
  login: "/login",
  about: "/about",
  course: (courseId: string) => `/courses/${courseId}`,
  test_connect_to_api: "/test-connect-to-api",
};
