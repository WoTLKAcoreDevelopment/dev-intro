import CreateAccount from "./Account-Creation/account-creation";
import { Hero } from "./components/hero";
import { NavbarDemo } from "./Navbar/navbar";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero/>
      <CreateAccount/>
      
    </div>
  );
}