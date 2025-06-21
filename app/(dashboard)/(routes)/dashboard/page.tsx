import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <>
      <SignedIn>
        <div>
          <p>Welcome to your dashboard!</p>
          <UserButton afterSwitchSessionUrl="/" />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
