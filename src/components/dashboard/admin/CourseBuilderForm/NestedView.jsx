import { RxDropdownMenu } from "react-icons/rx";
import { HiMiniPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const NestedView = ({ handleEditSectionName }) => {
  const course = useSelector((state) => state.courseReducer.course);

  const handleEditSubSection = () => {};
  return (
    <div className="rounded-md flex flex-col gap-4 bg-richblack-700 w-full px-4 py-4">
      <details className="w-full  ">
        <summary className="flex px-2 gap-4   justify-between items-center font-bold font-montserrat cursor-pointer w-full">
          <div className="flex gap-4 items-center">
            <RxDropdownMenu size={26} />
            <div>Section 1</div>
          </div>
          <div className="flex gap-2 items-center text-richblack-200">
            <button onClick={handleEditSectionName}>
              <HiMiniPencil size={24} />
            </button>
            <button>
              <MdDelete size={24} />
            </button>
            <span>|</span>
            <button>
              <AiFillCaretDown size={24} />
            </button>
          </div>
        </summary>
        <div className="w-10/12 mx-auto   ">
          <div className="flex justify-between">
            <p>Content of section 1</p>
            <div className="flex gap-2 items-center text-richblack-200">
              <button onClick={handleEditSubSection}>
                <HiMiniPencil size={20} />
              </button>
              <span>|</span>
              <button>
                <MdDelete size={20} />
              </button>
            </div>
          </div>
          <div>Add SubSection</div>
        </div>
      </details>
      <details className="w-full  ">
        <summary className="flex px-2 gap-4   justify-between items-center font-bold font-montserrat cursor-pointer w-full">
          <div className="flex gap-4 items-center">
            <RxDropdownMenu size={26} />
            <div>Section 1</div>
          </div>
          <div className="flex gap-2 items-center text-richblack-200">
            <button onClick={handleEditSectionName}>
              <HiMiniPencil size={24} />
            </button>
            <button>
              <MdDelete size={24} />
            </button>
            <span>|</span>
            <button>
              <AiFillCaretDown size={24} />
            </button>
          </div>
        </summary>
        <div className="w-10/12 mx-auto mt-2">
          <div className="flex justify-between">
            <p>Content of section 1</p>
            <div className="flex gap-2 items-center text-richblack-200">
              <button onClick={handleEditSubSection}>
                <HiMiniPencil size={20} />
              </button>
              <span>|</span>
              <button>
                <MdDelete size={20} />
              </button>
            </div>
          </div>
          <div>Add SubSection</div>
        </div>
      </details>
    </div>
  );
};

NestedView.propTypes = {
  handleEditSectionName: PropTypes.func,
};
export default NestedView;
