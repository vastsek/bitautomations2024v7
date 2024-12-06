import styled from "styled-components"

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? "#52AE32" : "#5ABD00")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "16px 0px" : "10px 20px")};
    color: #0A0A0A;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    &:hover{
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? "#3C8B27" : "#49B030")};
    }
    @media screen and (max-width: 960px){
        width: 100%;
    }
`

