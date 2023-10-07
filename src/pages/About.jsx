import HighlightText from "src/components/home/HighlightText";

import Image1 from "src/assets/Images/aboutus1.webp";
import Image2 from "src/assets/Images/aboutus2.webp";
import Image3 from "src/assets/Images/aboutus3.webp";

import Image4 from "src/assets/Images/FoundingStory.png";
import Grid from "src/components/about/Grid";
import ContactForm from "src/components/common/ContactForm";

const About = () => {
  return (
    <div className="flex h-full flex-1 flex-col w-full">
      {/* section 1 */}
      <div className="bg-richblack-700  flex flex-col items-center h-full w-full">
        <div className="text-4xl relative text-center font-bold text-white lg:w-[80%] ">
          <div className="mt-14">
            Driving Innovation in Online Education for a <br />
            <HighlightText>Brighter Future</HighlightText>
          </div>
          <div className="text-richblack-200 text-lg font-montserrat font-normal mt-6 lg:mb-56">
            {`Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.`}
          </div>
          {/* image about us */}
          <div className="lg:flex justify-between absolute -bottom-36 w-full">
            <img src={Image1} alt="about-photu1" />
            <img src={Image2} alt="about-photu2" />
            <img src={Image3} alt="about-photu3" />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-richblack-900 border-b border-richblack-500   pb-20 h-full  flex flex-col justify-center items-center">
        <div className="mt-52 lg:w-10/12 mx-auto text-center leading-relaxed text-white text-4xl font-bold">
          We are passionate about revolutionizing the way we learn. Our
          innovative platform <HighlightText>combines technology</HighlightText>{" "}
          ,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] via-[#f12711] to-[#f5af19] font-bold">
            expertise
          </span>
          , and community to create an <br />{" "}
          <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            unparalleled educational experience.
          </span>
        </div>
      </div>
      {/* section 3 */}
      <div className="bg-richblack-900 h-auto w-full flex justify-center items-center">
        <div className="w-10/12 h-full flex justify-between items-center mt-12 gap-20">
          <div className=" h-full w-full">
            <div className="bg-gradient-to-br font-bold from-[#833AB4] pb-4 via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-poppins text-transparent lg:w-[70%] mb-10">
              Our Founding Story
            </div>
            <div className="text-richblack-100 text-base  font-normal mb-14">
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </div>
            <div className="text-richblack-100 text-base font-norma mb-14">
              As experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We envisioned
              a platform that could bridge these gaps and empower individuals
              from all walks of life to unlock their full potential.
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img
              className="shadow-[0_0_30px_0] shadow-[#FC6767]"
              src={Image4}
              alt="right-side-photu"
            />
          </div>
        </div>
      </div>
      {/* two textboxes */}
      <div className="w-full bg-richblack-900 h-full ">
        <div className="w-10/12 mx-auto flex items-center">
          <div className="w-full flex justify-between items-center mt-12 gap-20">
            <div className="w-full h-full flex flex-col gap-y-11">
              <div className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-bold text-transparent lg:w-[70%] ">
                Our Vision
              </div>
              <div className="text-richblack-100 text-base  font-normal mb-14">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-y-11">
              <div className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-bold lg:w-[70%] ">
                Our Mission
              </div>
              <div className="text-richblack-100 text-base  font-normal mb-14">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gray band with stats */}
      <div className="w-full bg-richblack-600 h-36">
        <div className="w-11/12 mx-auto flex items-center justify-around h-full">
          {[
            {
              heading: "5K+",
              para: "Active Students",
            },
            {
              heading: "10+",
              para: "Mentors",
            },
            {
              heading: "200+",
              para: "Courses",
            },
            {
              heading: "69+",
              para: "Awards",
            },
          ].map((item, index) => {
            return (
              <div key={index} className="text-center flex flex-col gap-1">
                <div className="text-richblack-5 font-bold text-3xl">
                  {item.heading}
                </div>
                <div className="text-richblack-200 font-semibold text-base">
                  {item.para}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* grid */}
      <Grid />
      {/* Contact form */}
      <div className="w-full bg-richblack-900">
        <div className="w-2/6 mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default About;
