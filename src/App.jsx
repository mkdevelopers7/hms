import ChooseHMS from "./components/ChooseHMS";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import RecoveryPlan from "./components/RecoveryPlan";
import Revenue from "./components/Revenue";
import RevenueCycle from "./components/RevenueCycle";
import Services from "./components/Services";
import TraditionalBiling from "./components/TraditionalBiling";

function App() {
  return (
    <>
      <Hero />
      <Revenue />
      <RecoveryPlan />
      <RevenueCycle />
      <TraditionalBiling />
      <Services />
      <ChooseHMS />
      <p className="mb-42">Footer</p>
    </>
  );
}

export default App;
