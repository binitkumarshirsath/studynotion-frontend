//auth routes
const authRoutes = {
  login: "/user/login",
  signup: "/user/sign-up",
  sendOTP: "/user/send-otp",
};

// course - category routes
const categoryRoutes = {
  getAllCategories: "/course/all-categories",
};

export const apiRoutes = {
  // auth routes
  ...authRoutes,
  // course -> category routes
  ...categoryRoutes,
};
