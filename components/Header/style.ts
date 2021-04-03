import style from 'styled-components';

export const Header = style.header`
    display: block;
    padding: 6px 0px;
    // box-shadow: rgb(155 169 187 / 30%) 0px 2px 4px 0px;
    background-color: rgb(255, 255, 255);
`
export const Wrapper = style.div`
    max-width: 1240px;
    margin: 0px auto;
    position: relative;
    padding: 0px 1rem;
`
export const Main = style.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContainerFlex = style.div`
    display: flex;
    align-items: center;
`

export const Logo = style.a`
    cursor: pointer;
`;

export const MenuList = style.ul`
    display: flex;
    align-items: center;
`;

export const MenuLink = style.li`

    margin: 0px 8px;

    & a {
        color: #000;
        font-size: 18px;
        line-height: 28px;
        transition: all .4s ease;
    }
`;