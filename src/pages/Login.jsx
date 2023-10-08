import Template from "src/components/auth/Template";
import LoginImage from "src/assets/Images/login.webp";
const Login = () => {
  return (
    <div className="h-full w-full">
      <Template
        heading="Welcome Back"
        subheading="Build skills for today, tomorrow, and beyond."
        styledtext="Education to future-proof your career."
        img={LoginImage}
        formType="login"
      />
    </div>
  );
};

export default Login;
