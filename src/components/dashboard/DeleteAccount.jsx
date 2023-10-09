import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "src/api/operations/profileApi";
import Modal from "../common/Modal";
import { useState } from "react";

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async () => {
    dispatch(deleteAccount(navigate));
  };

  return (
    <div className="bg-[rgba(190,0,0,0.3)] mt-10  mb-10 pb-10 rounded-lg border-2  gap-10   pl-10 pr-10 border-red-500 h-auto w-10/12">
      <div className="relative w-full h-full flex gap-10 mt-10">
        {/* Delete icon */}
        <div className="w-20 h-20 rounded-full flex border-2 border-red justify-center items-center  bg-orange-600">
          <RiDeleteBin6Fill size={44} className="text-white " />
        </div>
        <div className="w-5/12 flex flex-col">
          <div className="text-white font-bold text-2xl opacity-100  font-poppins">
            Delete Account
          </div>
          <div className="text-richblack-5 font-medium font-poppins">
            Would you like to delete account? <br />
            This account may contain Paid Courses. Deleting your account is
            <span className="font-bold text-white opacity-100">
              {" "}
              permanent
            </span>{" "}
            and will remove all the contain associated with it.
          </div>
          <p
            onClick={() => setIsOpen(true)}
            className="italic font-bold font-xl text-white mt-6 cursor-pointer"
          >
            I want to delete my account.
          </p>
        </div>
      </div>
      {isOpen && (
        <Modal
          heading="Clicking delete will delete the account."
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text="Deleted account cant be recovered."
          btn1={{
            text: "DELETE",
            onClick: () => handleSubmit(),
          }}
        />
      )}
    </div>
  );
};

export default DeleteAccount;
