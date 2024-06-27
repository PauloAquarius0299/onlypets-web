import AuthScreen from "@/components/home/auth-screen/AuthScreen";
import HomeScreen from "@/components/home/home-screen/HomeScreen";
import Image from "next/image";

export default function Home() {
  const user = false;
  return (
    <main>
      <AuthScreen />
    </main>
  );
}
