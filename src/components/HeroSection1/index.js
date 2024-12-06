import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Button } from './HeroSectionElements'
import { heroSection, heroContainer, heroBtns } from './heroSection.module.css'
//import '../../styles/HeroSection1.css'

const HeroSection1 = () => {
    return (
        <div className={heroSection}>
            <StaticImage
                style={{ gridArea: "1/1", height: "100vh", width: "100%", marginTop: "-80px" }}
                layout="fullWidth"
                quality={100}
                objectFit="cover"
                transformOptions={{ fit: "cover", cropFocus: "attention" }}
                imgStyle={{ objectFit: "cover", objectPosition: "center"}}
                alt=""
                src="../../images/living-room-photo.jpg"
                formats={["auto", "webp", "avif"]}
            />
            <div className={heroContainer}>
                <h1>Έξυπνες εγκαταστάσεις για έξυπνα σπίτια</h1>
                <p>με την τεχνολογία KNX</p>
                <div className='hero-btns'>
                    <Link to="/smart-home">
                        <Button className={heroBtns} variant="primary" fontBig big primary>
                            Περισσότερα...
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection1
