
import Image from 'next/image';
import Slider from "react-slick";
import { PropsBanner } from './types';
import { BannerFull,  ContainerImage} from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BannerFullWidth = ( { images, arrowsActive, fullWidth }: PropsBanner ) => {

    const settings = {
        dots: true,
        arrows: arrowsActive,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <BannerFull>

            <Slider {...settings}>

                {
                    images.map((image, index) => {
                        return(
                            <ContainerImage key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit={fullWidth ? "cover" : "contain"}
                                    quality={100}
                                />
                            </ContainerImage>
                        )
                    })
                }

            </Slider>

        </BannerFull>
    )

}