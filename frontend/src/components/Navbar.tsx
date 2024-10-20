import { userInterface } from "../types";

const Navbar = ({ email, name }: userInterface) => {
  return (
    <div className="bg-white w-full sticky shadow-md">
      <div className="p-5 flex justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" className="size-16" />
          <h1 className="font-medium text-3xl text-[#399080] text-center hidden sm:block">
            anbello
          </h1>
        </div>

        <div className="flex gap-4">
          <div className="inline-block h-full w-0.5 self-stretch bg-neutral-100 dark:bg-white/10" />
          <div>
            <h1 className="font-medium text-lg">{name}</h1>
            <h1 className="text-gray-400 text-xs font-semibold">{email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
