import { Button } from "@/components/ui/button";
import Link from "next/link";

const landingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Landing Page</h1>
      <Link href="sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="sign-up">
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default landingPage;
