import style from "styled-components";

export const Modal = style.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(85,85,85,.75);
    opacity: ${(props: { active: Boolean }) => props.active ? "1" : "0"};
    z-index: ${(props: { active: Boolean }) => props.active ? "999" : "0"};
    pointer-events: ${(props: { active: Boolean }) => props.active ? "all" : "none"};
    transition: all .4s ease;
`
export const ModalContainer = style.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 91.875rem;
    width: 100%;
    background: rgb(255,255,255);
    border-radius: 2px;
    padding: 24px;
    padding-bottom: 36px;

    @media (min-width: 0px) and (max-width: 600px) {
        height: 100%;
        overflow: auto;
    }

    & .slick-dots {
        bottom: -28px;

        & li button {
            &::before {
                background: #000;
            }
        }

        & li.slick-active button {
            border-color: #000;
        }
    }
`
export const Images = style.aside`
    max-width: 62%;
    width: 100%;

    @media (min-width: 0px) and (max-width: 600px) {
        max-width: 100%;
        margin: 22px 0px;
        margin-bottom: 46px;
    }

`
export const Infos = style.aside`
    max-width: 36%;
    width: 100%;

    @media (min-width: 0px) and (max-width: 600px) {
        max-width: 100%;
    }

`
export const Title = style.h3`
    display: block;
    line-height: 18px;
    letter-spacing: -.004em;
    color: #020101;
    margin: 0 auto .5rem;
    font-weight: 600;
    font-size: 18px;
    text-align: left;
    margin-bottom: 14px;
`
export const SpanInfo = style.span`
    display: block;
    font-style: normal;
    line-height: 16px;
    letter-spacing: -.01em;
    color: grey;
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
`
export const Price = style.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: .125rem;
    flex-wrap: wrap;
`
export const PriceOld = style.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    letter-spacing: -.01em;
    text-decoration-line: line-through;
    color: grey;
    margin-right: .5rem;
`
export const PriceNew = style.span`
    display: block;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -.01em;
    color: #18bb05;
`
export const PriceInstallments = style.span`
    display: block;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    color: #404141;
`
export const PriceInstallmentsStrong = style.strong`
    font-weight: 600;
`
export const Description = style.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #686477;;
    transition: all 0.5s ease-in-out;
    margin: 18px 0px;
` 
export const SmallInfo = style.small`
    font-size: 12px;
    font-weight: 600;
`
export const BtnBuy = style.button`
    display: block;
    margin-top: 16px;
    width: 100%;
    border: none;
    padding: 12px;
    background: #18bb05;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    margin-bottom: 14px;
    border-radius: 4px;
    color: #ffff;
`
export const BtnClose = style.button`
    position: absolute;
    top: 8px;
    right: 15px;
    font-size: 18px;
    border: none;
    background: transparent;
    font-weight: 600;
    color: #808080;
`;