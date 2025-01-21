
import AccordionComponent from "./components/Accordion";
import Earning from "./components/Earning";
import Footer from "./components/Footer";
import TradeScan from "./components/TradeScan";
import UserTrust from "./components/UserTrust";

export default function Home() {
  return (
   <>
   <UserTrust/>
   <TradeScan/>
   <AccordionComponent/>
   <Earning/>
   {/* <Footer/> */}
   </>
  );
}
