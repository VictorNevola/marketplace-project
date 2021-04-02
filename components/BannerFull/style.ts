import style from 'styled-components';


export const BannerFull = style.div`

    & .slick-dots {
        bottom: 1.25rem;
        li{
            button {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: .875rem;
                height: .875rem;
                border: 2px solid transparent;
                border-radius: 50%;
                font-size: 0;
                transition: all .3s ease-in-out;

                &::before {
                    content: "";
                    width: 4px;
                    height: 4px;
                    top: 3px;
                    left: 3px;
                    border-radius: 50%;
                    background: #fff;
                    opacity: .5;
                    transition: all .3s ease-in-out;
                }
            }

            &.slick-active {
                button {
                    border-color: #fff;
                    &::before {
                        opacity: 1;
                    }
                }
            }
        }
    }

`

export const ContainerImage = style.div`
    position: relative;
    max-width: 1920px;
    width: 100%;
    height: 400px;
    margin: 0 auto;
`