import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an account | Starbucks® Rewards",
  description: "...",
};

export default function page() {
  return (
    <div className="mx-auto flex flex-col items-center">
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
      <div className="flex flex-col shadow-lg rounded-lg p-10 w-full max-w-xl">
        <div className="flex justify-end mt6">
          <button className="bg-primary-dark text-white py-4 px-6 rounded-full font-semibold shadow-2xs font-monterrat">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
