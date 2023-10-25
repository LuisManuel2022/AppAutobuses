import styled from "styled-components";

export const NavBarContainer = styled.div `
width: 100%;
height: 80px;
top: 0;
z-index: 99;
background-color: #1133bb;
`;

export const NavBarWrapper = styled.div `
margin: auto;
width: 100%;
max-width: 1600px;
height: 100%;
align-items: clearInterval;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const IconLogo = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: Oswald;
font-size: 2rem;
color: white;
padding-left: 2rem;
`;

export const Menu = styled. ul `
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #1133bb;
    z-index: 99;
}
`;

export const MenuItem = styled.li `
height:100%;
padding: 1.5rem 0.5rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-family: Oswald;
font-weight: 400;

&:hover {
    background-color: red;
    border-bottom: 0.3rem solid #ebc88b;
    transition: 0.4s ease-in;
}

@media screen and (max-width:960px) {
    width: 100%;
    height: 70px;
}
`;

export const MenuItemLink = styled.a `
text-decoration: none;
color: #fff;
`;

export const IconLogoMobile = styled.div `
display: none;

@media screen and (max-width: 960px) {
display: flex;
color: white;
font-size: 2rem;
padding-right: 2rem;
padding-top: 1rem;
}
`