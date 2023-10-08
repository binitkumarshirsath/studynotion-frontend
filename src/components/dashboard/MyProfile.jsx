import { useSelector } from "react-redux";
import EditButton from "../common/EditButton";

const MyProfile = () => {
  const user = useSelector((state) => state.profileReducer);
  const [firstName, lastName] = user?.name?.split(" ") || [];
  return (
    <div className="bg-richblack-900 w-full h-full">
      <div className="flex flex-col w-10/12 mx-auto  h-full">
        {/* Heading */}
        <div className="text-white font-bold text-3xl my-12 ">My Profile</div>

        {/* the 3 divs studnet name about and personal details */}
        <div className="bg-richblack-800 mb-10 rounded-lg border items-center flex justify-between pl-10 pr-10 border-richblack-600 h-28 w-10/12">
          {/* image and name email */}
          <div className="flex gap-4 relative">
            <div className="rounded-full">
              <img
                className="rounded-full max-w-[60px] min-w-[60px] max-h-[60px] min-h-[60px  ] object-contain"
                src={user?.image}
                alt="user-image"
              />
            </div>
            <div className="flex flex-col text-richblack-25 justify-evenly">
              <div className="font-bold">{user?.name}</div>
              <div>{user?.email}</div>
            </div>
          </div>
          {/* edit button */}
          <div>
            <EditButton text={"EDIT"} icon to={"/dashboard/settings"} />
          </div>
        </div>

        {/* 2nd div */}
        <div className="bg-richblack-800 mb-10 rounded-lg border items-center flex justify-between pl-10 pr-10 border-richblack-600 h-28 w-10/12">
          <div className="flex flex-col gap-10 justify-between">
            <div className="text-richblack-25 font-semibold text-2xl">
              About
            </div>
            <div className="text-richblack-100 text-sm">
              Write soemthing about yourself
            </div>
          </div>
          <div>
            <EditButton icon to="/dashboard/settings" text="EDIT" />
          </div>
        </div>

        {/* 3rd div  */}
        <div className="bg-richblack-800 rounded-lg border h-auto mb-10  flex  pl-10 pr-10 border-richblack-600  w-10/12 flex-col">
          {/* Personal details and edit btn */}
          <div className="flex justify-between mt-4 w-full items-center">
            <div className="text-richblack-25 font-semibold text-2xl">
              Personal Details
            </div>
            <div>
              <EditButton icon text="EDIT" to="/dashboard/settings" />
            </div>
          </div>
          {/* details */}
          <div className=" justify-between flex  mt-10 mb-10 w-10/12  ">
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-100">First Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {firstName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-100">Email</p>
                <p className="text-sm font-medium text-richblack-5 break-words">
                  {user?.email}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-100">Gender</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-richblack-100">Last Name</p>
                <p className="text-sm font-medium text-richblack-5">
                  {lastName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-100">Phone Number</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.additionalDetails?.contactNumber ??
                    "Add Contact Number"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-richblack-100">Date of Birth</p>
                <p className="text-sm font-medium text-richblack-5">
                  {user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
