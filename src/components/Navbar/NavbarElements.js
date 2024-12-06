import {Link} from "gatsby"
import styled from "styled-components"



export const Nav = styled.nav`
    background: white;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`

export const NavLogo = styled(Link)`
    color: #000000;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-left: 2rem;
        @media screen and (max-width: 480px){
        font-size: 1.2rem;
    }
`

export const NavIcon  = styled.div`
    margin: 0 0.5rem;
    font-size: 1.6rem;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 1.5rem;
        right: 2rem;
        transform: translate(-100% 60%);
        font-size: 2rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    @media screen and (max-width: 960px){
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        top: ${({ click }) => (click ? "100%" : "-1280px")};
        opacity: 1;
        transition: all 0.8s ease;
        background: rgb(219 234 254);
    }
`

export const NavItem = styled.li`
    height: 80px;
    @media screen and (max-width: 960px){
        width:100%;
    }
`

export const NavLinks = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-weight: 700;
    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        &:hover{
            color: rgb(30 58 138);
            transition: all 0.3s ease;
        }
    }
`