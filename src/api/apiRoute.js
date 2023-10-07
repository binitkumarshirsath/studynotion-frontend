//auth routes
const authRoutes = {
  login: "/user/login",
  signup: "/user/sign-up",
  sendOTP: "/user/send-otp",
};

//profile routes
const profileRoutes = {
  sendToken: "/profile/password-token",
  resetPassword: "/profile/reset-password",
};

// course - category routes
const categoryRoutes = {
  getAllCategories: "/course/all-categories",
};

// contact us api
const contactUs = {
  contactUs: "/contact-us",
};

export const apiRoutes = {
  // auth routes
  ...authRoutes,

  //profile routes
  ...profileRoutes,

  // course -> category routes
  ...categoryRoutes,

  //contact us route
  ...contactUs,
};
