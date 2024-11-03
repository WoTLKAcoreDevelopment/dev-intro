
import RegisterAccount from "./create-account/page";
import Hero from "./components/hero";
import GameList from "@/app/components/GameList";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <RegisterAccount/>
      <GameList/>
    </div>
  );
}