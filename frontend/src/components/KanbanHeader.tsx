import { Plus } from "lucide-react";
import {motion} from "framer-motion"
import Dialog from "./Dialog";

const KanbanHeader = () => {
  return (
    <div className=" mt-3">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Project project0</h1>
          <h1 className="text-gray-400 text-sm font-semibold">
            Created by Lidya Chan on June 10, 2024
          </h1>
        </div>
        <div className="flex gap-2">
        <motion.select
          id="projects"
          className="bg-gray-200 border border-white text-base font-semibold rounded-lg p-4 cursor-pointer outline-none"
        >
          <option selected>Choose a project</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </motion.select>
        <Dialog/>
        </div>
      </div>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
      
    </div>
  );
};

export default KanbanHeader;
