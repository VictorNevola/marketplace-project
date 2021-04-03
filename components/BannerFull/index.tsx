
import Image from 'next/image';
import Slider from "react-slick";

import { BannerFull,  ContainerImage} from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BannerFullWidth = () => {

    const settings = {
        dots: true,
        arrow: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <BannerFull>

            <Slider {...settings}>

                <ContainerImage>
                    <Image
                        src="/images/Banners/Banner__1.jpg"
                        alt="Banner 1"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </ContainerImage>

            </Slider>

        </BannerFull>
    )

}