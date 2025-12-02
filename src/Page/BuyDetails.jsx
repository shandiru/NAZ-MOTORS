import React from 'react'
import GallerySection from '../components/BuyDetails/Gallery'
import UnderTheBonnet from '../components/BuyDetails/UnderTheBonnet'
import VehicleDetailsSection from "../components/BuyDetails/VehicleDetailsSection"
const BuyDetails = () => {
    return (
        <div>
            <VehicleDetailsSection />
            <UnderTheBonnet />
            <GallerySection />
        </div>
    )
}

export default BuyDetails