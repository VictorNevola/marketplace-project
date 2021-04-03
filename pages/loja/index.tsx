import { Wrapper, ContainerProducts, TitleCarrouselProducts } from "../../styles/pages/Loja";
import { CarrouselProducts } from "../../components/CarrouselProducts";
import { QuickCart } from "../../components/QuickCart";
import ProductsPromptDeveliry from "../../data/products-prompt-delivery.json";
import { useState } from "react";

function Loja({ ProductsPromptDeveliry }) {

  const [activeModal, setActiveModal] = useState(false);
  const [imagesProductForQuickCart, setImagesProductForQuickCart] = useState([{
    src: ProductsPromptDeveliry[0].images[0],
    alt: "",
  }]);

  const [infosProductForQuickCart, setInfosProductForQuickCart] = useState({
    name: "",
    description: "",
    oldPrice: 0,
    newPrice: 0
  });

  const handlerModalQuickCart = async (refID: string) => {
    const productSelected = await [...ProductsPromptDeveliry].find(product => product.ref === refID);
    const imageProductSelected = await productSelected.images.map((image: string) => {
      return {
        src: image,
        alt: productSelected.ref
      }
    });
    
    setInfosProductForQuickCart({
      name: productSelected.name,
      description: productSelected.descrption,
      newPrice: productSelected.newPrice,
      oldPrice: productSelected.oldPrice
    });

    await Promise.all(imageProductSelected);

    setImagesProductForQuickCart(imageProductSelected);
    setActiveModal(true);
  };

  const closeQuickCart = () => setActiveModal(false);

  return (
    <>
      <QuickCart isActive={activeModal} images={imagesProductForQuickCart} infos={infosProductForQuickCart} closeQuickCart={closeQuickCart} />
      <Wrapper>
        <ContainerProducts>
          <TitleCarrouselProducts>Pronta Entrega</TitleCarrouselProducts>
          <CarrouselProducts products={ProductsPromptDeveliry} activeQuickCart={handlerModalQuickCart} />
        </ContainerProducts>
      </Wrapper>
    </>
  );
}

Loja.getInitialProps = async () => {
  return {
    ProductsPromptDeveliry: ProductsPromptDeveliry,
  };
};


export default Loja