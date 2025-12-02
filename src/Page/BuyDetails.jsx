import React from 'react'
import GallerySection from '../components/BuyDetails/Gallery'
import UnderTheBonnet from '../components/BuyDetails/UnderTheBonnet'
import VehicleDetailsSection from "../components/BuyDetails/VehicleDetailsSection"
import VehicleDetailsPage from '../components/BuyDetails/BuyHeader'
import {bonnetData , galleryImages} from "../components/BuyDetails/bonnetData"
const BuyDetails = () => {

  
  return (
    <div>
      <VehicleDetailsPage />
      <VehicleDetailsSection />
      <UnderTheBonnet items={bonnetData} />   {/* <- PASS DATA HERE */}
        <GallerySection images={galleryImages} />
    </div>
  )
}

export default BuyDetails
