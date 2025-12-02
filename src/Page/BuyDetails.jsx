import React from 'react'
import GallerySection from '../components/BuyDetails/Gallery'
import UnderTheBonnet from '../components/BuyDetails/UnderTheBonnet'
import VehicleDetailsSection from "../components/BuyDetails/VehicleDetailsSection"
import VehicleDetailsPage from '../components/BuyDetails/BuyHeader'
const BuyDetails = () => {
    return (
        <div>
            <VehicleDetailsPage />
            <VehicleDetailsSection />
            <UnderTheBonnet />
            <GallerySection />
        </div>
    )
}

export default BuyDetails