import React from 'react'
import GallerySection from '../components/BuyDetails/Gallery'
import UnderTheBonnet from '../components/BuyDetails/UnderTheBonnet'
import VehicleDetailsSection from "../components/BuyDetails/VehicleDetailsSection"
import VehicleDetailsPage from '../components/BuyDetails/BuyHeader'
import { bonnetData, galleryImages, vehicleDetails, vehicleData } from "../components/BuyDetails/bonnetData"
import Header from '../components/Header'
const BuyDetails = () => {


  return (
    <div>
      <Header />
      <VehicleDetailsPage vehicle={vehicleData} />
      <VehicleDetailsSection data={vehicleDetails} />
      <UnderTheBonnet items={bonnetData} />   {/* <- PASS DATA HERE */}
      <GallerySection images={galleryImages} />
    </div>
  )
}

export default BuyDetails
