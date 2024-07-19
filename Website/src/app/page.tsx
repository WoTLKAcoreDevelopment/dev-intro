
import RegisterAccount from "./create-account/page";
import Heroe from "./components/hero";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="">
      <Heroe/>
      <RegisterAccount/>
      
    </div>
  );
}