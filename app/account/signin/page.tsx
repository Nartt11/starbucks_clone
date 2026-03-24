import { Metadata } from "next";
import Link from "next/link";
import SignInForm from "./SignInForm";

export default function Page() {
  return (
    <div className="mx-auto flex flex-col items-center max-w-md px-4 py-14">
      <p className="text-3xl font-semibold tracking-tight text-neutral-900 mb-8 text-center">
        Sign in or create an account
      </p>
      {/* card */}
      <div className="flex flex-col bg-white inset-shadow-xs rounded-2xl px-10 py-9 w-full border border-neutral-200">
        <SignInForm />
      </div>

      <div className="flex flex-col items-center max-w-md text-center gap-4 mt-10">
        <p className="tracking-[0.18em] text-xs font-semibold text-green-800 uppercase">
          Join Starbucks® Rewards
        </p>
        <p className="text-sm text-neutral-800 leading-relaxed">
          As a member, start earning free food and drinks, unlock our best
          offers and celebrate your birthday with a treat from us. Best of all,
          it&apos;s free to join.
        </p>
        <Link href="/account/create">
          <button className="bg-white text-green-800 py-2 px-8 rounded-full font-semibold shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] border border-green-800 hover:bg-green-50">
            Join now
          </button>
        </Link>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Account Sign In",
  description: "...",
};
