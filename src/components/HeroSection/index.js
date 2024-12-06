import React from "react"
import { Button } from './HeroSectionElements'
import { Link } from "gatsby"
import '../../styles/HeroSection.css'

const HeroSection = () => {
    return(
        <div className='hero-container'>
            <h1>Έξυπνες εγκαταστάσεις για έξυπνα σπίτια</h1>
            <p>με την τεχνολογία KNX</p>
            <div className='hero-btns'>
                <Button variant="primary" fontBig big primary>
                    <Link to="/knx" className="px-12 py-6">Περισσότερα...</Link>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection