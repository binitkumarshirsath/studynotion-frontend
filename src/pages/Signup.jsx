import Template from "src/components/auth/Template";

import image from "src/assets/Images/signup.webp";
const Signup = () => {
  return (
    <Template
      heading="Join the millions learning to code with StudyNotion for free"
      subheading="Build skills for today, tomorrow, and beyond."
      styledtext="Education to future-proof your career."
      img={image}
      formType="signup"
      key={2}
    />
  );
};

export default Signup;
