import style from "styled-components";

export const Article = style.article`

    margin-right: 8px;
`

export const Title = style.h1`
    display: block;
    height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
    letter-spacing: -.004em;
    color: #020101;
    margin: 0 auto .5rem;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
`

export const Info = style.span`
    display: block;
    font-style: normal;
    line-height: 16px;
    letter-spacing: -.01em;
    color: grey;
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
`

export const Price = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .125rem;
    flex-wrap: wrap;

`

export const PriceOld = style.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    letter-spacing: -.01em;
    text-decoration-line: line-through;
    color: grey;
    margin-right: .5rem;
`

export const PriceNew = style.span`
    display: block;
    font-weight: 600;
    font-size: 16px;
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
    text-align: center;
    color: #404141;
`

export const StrongInstallments = style.strong`
    font-weight: 600;    
`

export const ViewDetails = style.button`
    display: block;
    max-width: 20.625rem;
    width: 100%;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    line-height: 2.25rem;
    text-align: center;
    border: none;
    margin: 0 auto;
    padding: 4px;
    margin-top: 12px;
    color: #404141;
    transition: all .4s ease-out;

    &:hover {
        color: #000
    }
`