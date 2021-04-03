import { BannerFullWidth } from "../components/BannerFull";

function Home() {
  return (
    <>
      <BannerFullWidth fullWidth={true} arrowsActive={false} images={
        [{
          src: "/images/Banners/Banner__1.jpg",
          alt: "Banner_1"
        },
        {
          src: "/images/Banners/Banner__1.jpg",
          alt: "Banner_1"
        }
        ]
      } />
    </>
  );
}

export default Home;
