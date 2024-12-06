import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavIcon,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from "./NavbarElements"


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeNav = () => {
        if (window.scrollY >=80){
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)

    }, [])

  
    return (
        <>
        <IconContext.Provider value = {{  color: '#131313'}}>
            <Nav active = {scroll} click={click}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={ closeMobileMenu }>
                        <NavIcon>
                            <StaticImage src='../../images/icon.png' title='Logo' alt='biT Automations Logo' placeholder='blurred' layout="fixed" width={36} height={36} />
                        </NavIcon>
                        biT Automations
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/" activeStyle={{ color: "rgb(30 58 138)" }} >ΑΡΧΙΚΗ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/smart-home" activeStyle={{ color: "rgb(30 58 138)" }}>ΕΞΥΠΝΟ ΣΠΙΤΙ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services" activeStyle={{ color: "rgb(30 58 138)" }}>ΥΠΗΡΕΣΙΕΣ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/projects" activeStyle={{ color: "rgb(30 58 138)" }}>ΤΑ ΕΡΓΑ ΜΑΣ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about" activeStyle={{ color: "rgb(30 58 138)" }}>ΕΠΙΚΟΙΝΩΝΙΑ</NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )

}

export default Navbar