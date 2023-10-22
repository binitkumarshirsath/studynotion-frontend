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
  getUserDetails: "profile/user-details",
  updateProfile: "/profile/update-user",
  changePassword: "/profile/change-password",
  deleteAccount: "/profile/delete-account",
};

// course - category routes
const categoryRoutes = {
  getAllCategories: "/course/all-categories",
};

// contact us api
const contactUs = {
  contactUs: "/contact-us",
};

// course routes
const courseRoutes = {
  createCourse: "/course/create-course",
  updateCourse: "/course/update-course",

  createSection: "/course/create-section",
  updateSection: "/course/update-section",
};

export const apiRoutes = {
  // auth routes
  ...authRoutes,

  //profile routes
  ...profileRoutes,

  // course
  ...courseRoutes,

  // course -> category routes
  ...categoryRoutes,

  //contact us route
  ...contactUs,
};
