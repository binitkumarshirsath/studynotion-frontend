import CTAButton from "src/components/common/CTAButton";
import { AiOutlineHome } from "react-icons/ai";
const Error = () => {
  return (
    <div className="h-[calc(100vh-50px)] bg-richblack-900 gap-10 flex flex-col justify-center items-center">
      <div className="text-white font-bold text-4xl">ERROR</div>
      <div className="text-richblack-25 font-semibold text-2xl">
        404 Not found
      </div>
      <div>
        <CTAButton
          linkTo="/"
          bgColor="bg-yellow-50"
          icon={<AiOutlineHome />}
          shadowColor="bg-yellow-25"
          text="Back to Homepage"
          textColor="text-richblack-900"
        />
      </div>
    </div>
  );
};

export default Error;
