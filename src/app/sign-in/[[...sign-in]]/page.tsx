import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-[#28f000ec] bg-noise">
      <SignIn />
    </div>
  );
}
