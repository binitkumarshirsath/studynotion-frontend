import { TypeAnimation } from "react-type-animation";
import PropTypes from "prop-types";

import CTAButton from "./CTAButton";
const CodeBlock = ({
  heading,
  para,
  ctaBtn1,
  ctaBtn2,
  flexDirection,
  content,
  codeColor,
}) => {
  return (
    <>
      <div
        className={`mt-24 flex  justify-center  w-10/12 ${flexDirection}  gap-32  `}
      >
        {/* written part and btns */}
        <div className="w-4/6">
          <div className="text-white text-3xl font-bold font-mono">
            {heading}
          </div>
          <p className="font-inter text-richblack-300 font-semibold mt-4 ">
            {para}
          </p>
          <div className="flex mt-5 justify-start gap-11">
            <CTAButton
              text={ctaBtn1.text}
              bgColor={ctaBtn1.bgColor}
              linkTo={ctaBtn1.linkTo}
              textColor={ctaBtn1.textColor}
              shadowColor={ctaBtn1.shadowColor}
              icon={ctaBtn1.icon}
            />
            <CTAButton
              text={ctaBtn2.text}
              bgColor={ctaBtn2.bgColor}
              linkTo={ctaBtn2.linkTo}
              textColor={ctaBtn2.textColor}
              shadowColor={ctaBtn2.shadowColor}
              icon={ctaBtn2.icon}
            />
          </div>
        </div>
        {/* typeanimation code */}
        <div
          className={`w-5/6  border rounded-sm  border-richblack-500 bg-gra  p-2 flex `}
        >
          <div className="w-[4%] mx-4  text-richblack-200 font-semibold">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
          </div>
          <div className={`${codeColor} w-full font-bold font-mono`}>
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
              cursor={false}
              repeat={Infinity}
              omitDeletionAnimation={true}
              sequence={[content, 1000, ""]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

CodeBlock.propTypes = {
  heading: PropTypes.any,
  para: PropTypes.string,
  flexDirection: PropTypes.string,
  content: PropTypes.string,
  codeColor: PropTypes.string,
  ctaBtn1: PropTypes.shape({
    text: PropTypes.string,
    bgColor: PropTypes.string,
    linkTo: PropTypes.string,
    textColor: PropTypes.string,
    shadowColor: PropTypes.string,
    icon: PropTypes.element || PropTypes.string,
  }),

  ctaBtn2: PropTypes.shape({
    text: PropTypes.string,
    bgColor: PropTypes.string,
    linkTo: PropTypes.string,
    textColor: PropTypes.string,
    shadowColor: PropTypes.string,
    icon: PropTypes.string || PropTypes.string,
  }),
};

export default CodeBlock;
