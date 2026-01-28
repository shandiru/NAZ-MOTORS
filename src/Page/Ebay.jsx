import React from "react";
import About from "../components/Ebay/About"
import Whychoose from "../components/Ebay/Whychoose"
import Faq from "../components/Ebay/Faq"
import BenefitsSlider from "../components/Ebay/BenefitsSlider"
import EbayHeader from "../components/EbayHeader";

export default function Ebay() {
  return (
    <div>
      <EbayHeader />
      <About />
      <BenefitsSlider />
      <Whychoose />
      <Faq />
    </div>
  );
}
