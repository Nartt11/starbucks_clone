import { Metadata } from "next";
import CreateForm from "./CreateForm";

export const metadata: Metadata = {
  title: "Create an account | Starbucks® Rewards",
  description: "...",
};

export default function page() {
  return (
    <div className="mx-auto flex flex-col items-center max-w-md px-4 py-14">
      {/* text */}

      <div className="flex flex-col items-center align-middle max-w-md">
        <h2 className="font-semibold text-2xl text-black  py-4">
          Create an account
        </h2>
        <p className="text-gray-400 uppercase">Starbucks® Rewards</p>
        <p className="text-center text-gray-400 py-4 text-sm">
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and
          moremore.
        </p>
      </div>
      {/* card */}
      <div className="max-w-sm">
        <CreateForm />
      </div>
      {/* <div className="flex flex-col shadow-lg rounded-lg p-10 w-full max-w-xl">
        
      </div> */}
    </div>
  );
}
