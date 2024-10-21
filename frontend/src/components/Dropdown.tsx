import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";


const Dropdown = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const dropDownRef = useRef<any>();

  useEffect(() => {
    const toggleDropDown = (e: MouseEvent) => {
      if (dropDownRef.current?.contains(e.target)) {
        setShowDropDown(!showDropDown);
   
      } else {
        setShowDropDown(false);
    
      }
    };
    document.body.addEventListener("click", toggleDropDown);
    return () => document.body.removeEventListener("click", toggleDropDown);
  }, []);

  return (
    <div>
      <EllipsisVertical className="cursor-pointer" ref={dropDownRef} />
      {showDropDown && (
        <div
        className="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <div className="block text-sm font-medium text-gray-500 cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Add Task
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
