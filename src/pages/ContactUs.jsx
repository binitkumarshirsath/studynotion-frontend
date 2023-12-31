import ContactForm from "src/components/common/ContactForm";

import { PiChatsBold } from "react-icons/pi";
import { BsGlobeAmericas } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="h-auto bg-richblack-900">
      <div className="w-10/12 h-full mx-auto  flex gap-10 justify-between">
        <div className="w-full flex  bg-richblack-900">
          <div className="flex flex-col    w-5/6 text-richblack-5">
            <div className="bg-richblack-800 rounded-xl mt-24 pb-10">
              <div className="flex flex-col pt-10 px-10 ">
                <div className="flex gap-4 items-center">
                  <PiChatsBold className="flex" size={30} />{" "}
                  <span className="font-semibold font-poppins text-lg">
                    Chat on us
                  </span>
                </div>
                <div className="mt-2 text-richblack-25 font-poppins">
                  Our friendly team is here to help.
                  <br />
                  princevinitkumar007@gmail.com
                </div>
                <div></div>
              </div>
              <div className="flex flex-col pt-10 px-10 ">
                <div className="flex gap-4 items-center">
                  <BsGlobeAmericas className="flex" size={30} />{" "}
                  <span className="font-semibold font-poppins text-lg">
                    Come , Visit us
                  </span>
                </div>
                <div className="mt-2 text-richblack-25 font-poppins">
                  Come and say hello at our office HQ.
                  <br />
                  BiniTech Thane, Maharashtra 400069
                </div>
                <div></div>
              </div>
              <div className="flex flex-col pt-10 px-10 ">
                <div className="flex gap-4 items-center">
                  <FiPhoneCall className="flex" size={30} />{" "}
                  <span className="font-semibold font-poppins text-lg">
                    Call us
                  </span>
                </div>
                <div className="mt-2 text-richblack-25 font-poppins">
                  Mon - Fri From 10am to 4pm
                  <br />
                  +91 9111 2111 432
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
