import Template from "src/components/auth/Template";
import LoginImage from "src/assets/Images/login.webp";
const Login = () => {
  return (
    <>
      <Template
        heading="Welcome Back"
        subheading="Build skills for today, tomorrow, and beyond."
        styledtext="Education to future-proof your career."
        img={LoginImage}
        formType="login"
      />
    </>
  );
};

export default Login;
